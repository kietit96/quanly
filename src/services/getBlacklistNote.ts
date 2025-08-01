import fetchRequest from "./requestOrigin"

export const getBlacklistNote = async () => {
    const result = await fetchRequest('/home?do=get_list_blacklist_info', { method: "POST" })
    const remapResult = result.data.map((item: any) => {
        return {
            value: item.id,
            name: item.title,
        }
    })
    return remapResult
}