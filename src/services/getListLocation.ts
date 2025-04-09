import fetchRequest from "./requestOrigin"

export const getListLocation = async (currentMonth: number, currentYear: number) => {
    const formData = new FormData()
    const month = currentMonth < 10 ? `0${currentMonth}` : currentMonth.toString()
    formData.append("curMonth", month)
    formData.append("curYear", currentYear.toString())
    const result = await fetchRequest('/home?do=get_list_location', {
        method: "POST",
        body: formData,
    })
    return result
}