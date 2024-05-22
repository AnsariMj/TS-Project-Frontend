export interface UserDataType {
    email: string,
    password: string,
    username: string
}
export interface LoginUserData {
    email: string,
    password: string,
}

export interface Props {
    type: string,
    onSubmit: (data: UserDataType) => void
}