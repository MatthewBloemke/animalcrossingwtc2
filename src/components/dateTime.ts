function asDateString(date: Date) {
    return `${date.getFullYear().toString(10)}-${(date.getMonth()+1)
    .toString(10)
    .padStart(2, "0")}-${date.getDate().toString(10).padStart(2, "0")}`;
};

function asTimeString(date: Date) {
    if (date.getMinutes() < 10) {
        return date.getHours() + ":0" + date.getMinutes();
    } else {
        return date.getHours() + ":" + date.getMinutes();
    };
};

export function asPrettyDate(date: Date) {
    const month = date.toLocaleString('default', {month: "long"});
    return `${month} ${date.getDate().toString(10)}, ${date.getFullYear().toString(10)}`;
};

export function asTwelveHourTimeString(time: any) {
    if (time.slice(0,2) === "12") {
        return time + "pm";
    } else if (time.slice(0,2) > 12) {
        const newTime = time.slice(0,2)-12;
        return `${newTime}:${time.slice(3,5)}pm`;
    } else {
        return time + "am";;
    };
};

export function currentMonth() {
    const date = new Date();
    return (date.getMonth() + 1);
};

export function today() {
    return asDateString(new Date());
};

export function now() {
    return asTimeString(new Date());
};