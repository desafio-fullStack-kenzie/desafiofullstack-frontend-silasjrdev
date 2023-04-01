interface iAuthProviderProps {
    children: React.ReactNode
}

interface iUserDataRegister {
    fullName: string
    email: string
    password: string
    confirmPassword?: string
    contact: string
}

interface iUserDataLogin {
    email: string
    password: string
}

interface iUserDataRegisterResponse{
    id: string
    email: string
    fullName: string
    contact: string
}

interface iUserTokenRegisterResponse{
    accessToken: string
    user: iUserDataRegisterResponse
}

interface iResponseLogin{
    accessToken: string,
    user:{
        id: string
    }
}

interface iUserData{
    fullName?: string
    email?: string
    id?: string
    createdAt?: Date;
    updatedAt?: Date;
}

interface iUserContextProps {
    //Register
    onSubmitRegister: (dataRegister: iUserDataRegister) => Promise<void>

    //Login
    onSubmitLogin: (dataLogin: iUserDataLogin) => Promise<void>
    userState: boolean
    setUserState: React.Dispatch<React.SetStateAction<boolean>>

    //Globals
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>

    userData:{}
    setUserData: React.Dispatch<React.SetStateAction<{}>>

    setUser:React.Dispatch<React.SetStateAction<iUserData | null>>
    user:iUserData | null
}
export type {iAuthProviderProps, iUserDataRegister, iUserDataLogin, iUserDataRegisterResponse, iUserTokenRegisterResponse, iResponseLogin, iUserData, iUserContextProps}