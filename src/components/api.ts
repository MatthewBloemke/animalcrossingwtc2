const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("X-API-KEY", process.env.apiKey);

const fetchJson = async (url, options, onCancel) => {
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
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            return {status: response.status, error};
        };
        return onCancel;
    };
};

export async function pullNHfish (currentMonth) {
    return await fetchJson(`https://api.nookipedia.com/nh/fish?month=${currentMonth}`, {headers}, []);
};

export async function pullNHbugs (currentMonth) {
    return await fetchJson(`https://api.nookipedia.com/nh/bugs?month=${currentMonth}`, {headers}, []);
};