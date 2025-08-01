export function checkDecimal(value: number): boolean {
    return value !== Math.round(value);
}