export interface Auth {
    auth: boolean
    user: User
}

export interface User {
    username: string
    password: string
}