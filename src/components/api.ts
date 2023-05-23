const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("X-API-KEY", process.env.apiKey!);

const fetchJson = async (url: string, options: object, onCancel: any) => {
    try {
        const response = await fetch(url, options);
        if (response.status === 204) {
            return null;
        } else if (response.status === 401) {
            return undefined;
        };
        const payload = await response.json();
        if (payload.error) {
            return {status: response.status, error: payload.error};
        };
        return payload;
    } catch (error: any) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            return error;
        };
        return onCancel;
    };
};

export async function pullNHfish (currentMonth: number) {
    return await fetchJson(`https://api.nookipedia.com/nh/fish?month=${currentMonth}`, {headers}, []);
};

export async function pullNHbugs (currentMonth: number) {
    return await fetchJson(`https://api.nookipedia.com/nh/bugs?month=${currentMonth}`, {headers}, []);
};