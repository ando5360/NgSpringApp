export class Message {
    origin: roles
    content: string
    timestamp: Date
    author: string

    constructor() {
        this.origin = roles.System
        this.content = ""
        this.timestamp = new Date()
        this.author = ""
    }
}
