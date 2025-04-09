import CatchError from "@/catchError"

const initialUrl: string = 'https://saigonsecurity.vn/quanly/modules/api/request'

type Toptions = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    headers?: {
        'Content-Type': 'application/json'
    }
    body?: FormData,
}
const fetchRequest = async (url: string, options: Toptions) => {
    const response = await fetch(`${initialUrl}${url}`, options)
    const result = await response.json()
    try {
        if (!response.ok) {
            throw new CatchError('Network response was not ok')
        }
        if (response.status !== 200) {
            throw new CatchError(result.message, result.sql)
        }
        return result
    } catch (error: unknown) {
        if (error instanceof CatchError) {
            alert(error.message)
            console.log(error.additionalInfo)
        } else {
            alert('unexpected error')
            console.log(error)
        }
    }
    return null
}
export default fetchRequest