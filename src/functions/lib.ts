export function returnTextMonth(month: number): string {
    return month + 1 < 10 ? `0${month + 1}` : (month + 1).toString()
}
export function returnTextDay(day: number) {
    return day < 10 ? `0${day}` : day.toString()
}
export function formatDate(date: string) {
    const listDate = date.split(",");
    for (let i = 0; i < listDate.length; i++) {
        const arrDate = listDate[i].split("-");
        listDate[i] = `${arrDate[2]}/${arrDate[1]}`;
    }
    return listDate.join(", ")
}

export function formatInputDate(date: Date) {
    return `${returnTextDay(date.getDate())}/${returnTextMonth(date.getMonth())}/${date.getFullYear()}`
}

export function deFormatDate(value: string) {
    const arrDate = value.split("/");
    const [day, month, year] = arrDate
    return `${year}-${month}-${day}`
}