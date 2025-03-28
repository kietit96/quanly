import { catchError } from "@/catchError";

export const LoginAuth = async (username: string, password: string) => {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    try {
        const response = await fetch('https://saigonsecurity.vn/quanly/modules/api/request/auth', {
            method: 'POST',
            body: formData,
        })
        const data = await response.json()
        if (data.status !== 200) {
            const error = new Error(data.message)
            error.sql = data.sql
            throw error
        }
        return data.user
    } catch (error: unknown) {
        console.log(error.sql)
        throw catchError(error)
    }
}