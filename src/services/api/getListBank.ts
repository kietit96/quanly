export const getListBank = async () => {
    const url = "https://api.vietqr.io/v2/banks";
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Failed to fetch bank list");
    }
    const data = await response.json();
    return data
}