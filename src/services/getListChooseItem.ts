import fetchRequest from "./requestOrigin"

export const getListChooseItem = async () => {
    const result = await fetchRequest('/home?do=get_list_chooseItem')
    return result.data
}