import { CustomError } from "@/catchError"

export const LoginAuth = async (username: string, password: string) => {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    try {
        const response = await fetch('https://saigonsecurity.vn/quanly/modules/api/request/auth', {
            method: 'POST',
            body: formData,
        })
        if (!response.ok) {
            const errorText = await response.text(); // Read as text to avoid JSON parse error
            throw new CustomError(`HTTP ${response.status}: ${errorText}`, '');
        }
        const data = await response.json()
        if (response.status !== 200) {
            const error = new CustomError(data.message, data.sql)
            throw error
        }
        return data
    } catch (error) {
        return { message: error.message, additionalInfo: error.additionalInfo }
    }
}