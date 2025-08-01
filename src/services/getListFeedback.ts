import fetchRequest from "./requestOrigin"

export const getListFeedback = async (month: number, year: number) => {
    const formData = new FormData()
    const curMonth = month + 1 < 10 ? `0${month + 1}` : (month + 1).toString()
    formData.append("month", curMonth)
    formData.append("year", year.toString())
    const result = await fetchRequest("/home?do=getFeedbacks", {
        method: "POST",
        body: formData
    })
    return result
}