
import fetchRequest from "./requestOrigin";

export const LoginAuth = async (username: string, password: string) => {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    const result = await fetchRequest('/auth?do=login', {
        method: 'POST',
        body: formData,
    })
    return result
}
export const getInfoUser = async (userId: number) => {
    const formData = new FormData()
    formData.append('userId', userId.toString())
    const result = await fetchRequest('/auth?do=checkUser', {
        method: 'POST',
        body: formData,
    })
    return result
}