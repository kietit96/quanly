import { returnTextMonth } from "@/functions/lib"
import fetchRequest from "./requestOrigin"

export async function getListAbsent(month: number, year: number) {
    const curMonth = returnTextMonth(month)
    const formData = new FormData()
    formData.append("month", curMonth)
    formData.append("year", year.toString())
    const result = await fetchRequest("/home?do=get_list_absent", {
        method: "POST",
        body: formData
    })
    return result
}