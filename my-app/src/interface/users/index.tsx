interface iAuthProviderProps {
    children: React.ReactNode
}

interface iUserDataRegister {
    fullName: string
    email: string
    password: string
    confirmPassword?: string
    contact: string
    imageUrl?: string
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
    token: string
    user: iUserDataRegisterResponse
}

interface iResponseLogin{
    token: string,
}

interface iUserData{
    fullName?: string
    email?: string
    id?: string
    imageUrl?: string
    createdAt?: Date;
    updatedAt?: Date;
}

interface iUpdateUserData {
    fullName?: string
    email?: string
    password?: string
    confirmPassword?: string
    contact?: string
}

interface iUpdateUserImageData {
    imageUrl: string
}

interface iUserContextProps {
    //Register
    onSubmitRegister: (dataRegister: iUserDataRegister) => Promise<void>

    //Login
    onSubmitLogin: (dataLogin: iUserDataLogin) => Promise<void>
    userState: boolean
    setUserState: React.Dispatch<React.SetStateAction<boolean>>

    //update user
    updateUserData:(data: iUpdateUserData) => Promise<void>

    //update image
    updateUserImageData:(data: iUpdateUserImageData) => Promise<void>

    // loading
    modalAddOpen?: boolean
    setModalAddOpen: React.Dispatch<React.SetStateAction<boolean>>

    //Globals
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>

    userData:{}
    setUserData: React.Dispatch<React.SetStateAction<{}>>

    user:iUserData | null
    setUser:React.Dispatch<React.SetStateAction<iUserData | null>>
}
export type {iUpdateUserImageData, iAuthProviderProps, iUserDataRegister, iUserDataLogin, iUserDataRegisterResponse, iUserTokenRegisterResponse, iResponseLogin, iUserData, iUserContextProps, iUpdateUserData}