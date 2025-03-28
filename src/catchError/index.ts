interface CustomError {
    message: string;
}
function isCustomError(error: unknown): error is CustomError {
    return typeof (error as CustomError).message === 'string';
}

export function catchError(error: unknown) {
    if (isCustomError(error)) {
        return new Error(error.message)
    } else if (error instanceof Error) {
        return new Error(error.message)
    }
    return new Error('An unknown error occurred')
}

export function catchMessageError(error: unknown) {
    if (isCustomError(error)) {
        return error.message
    } else if (error instanceof Error) {
        return error.message
    }
    return 'An unknown error occurred'
}