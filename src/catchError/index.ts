export default class CatchError extends Error {
    additionalInfo?: string
    constructor(message: string, additionalInfo?: string) {
        super(message)
        this.additionalInfo = additionalInfo
    }
}