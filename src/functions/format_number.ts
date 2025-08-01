export function number_format(number: number) {
    const options = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    };
    const formatter = new Intl.NumberFormat('en-US', options);
    return formatter.format(number).replace('.', ',').replace(/,/g, '.');
}