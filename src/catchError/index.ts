interface ICustomError {
    message: string;
}
function isCustomError(error: unknown): error is ICustomError {
    return typeof (error as ICustomError).message === 'string';
}
export class CustomError extends Error {
    additionalInfo: string;
    constructor(message: string, additionalInfo: string) {
        super(message)
        this.additionalInfo = additionalInfo
    }
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