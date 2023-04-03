import {createContext, useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router"
import { toastifySucess, toastifyFailed } from "../../components/toastify"
import { Api } from "../../services/api"
import { iAuthProviderProps, iResponseLogin, iUpdateUserData, iUpdateUserImageData, iUserContextProps, iUserData, iUserDataLogin, iUserDataRegister, iUserDataRegisterResponse, iUserTokenRegisterResponse } from "../../interface/users";

export const UserContext = createContext({} as iUserContextProps);

export default function UserProvider({children}: iAuthProviderProps) {
    const [loading, setLoading] = useState(true)
    const [userState, setUserState] = useState(false)
    const [userData, setUserData] = useState({})
    const [user, setUser] = useState<iUserData | null>(null)
    const [modalAddOpen, setModalAddOpen] = useState<boolean>(false)
    const {userId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@TOKEN")
            const id = localStorage.getItem("@USERID")

            if (token){
                try{
                    Api.defaults.headers.authorization = `Bearer ${token}`
                    const {data} = await Api.get(`/users/${id}`)
                    setUser(data)
                } catch (error) {
                    console.error(error)
                }
            }
            setLoading(false)
        }
        loadUser()
    },[]);

    //Register

    const onSubmitRegister = async (dataRegister: iUserDataRegister) => {
        setLoading(true)
        delete dataRegister.confirmPassword;
        console.log(dataRegister)

        try {
            const { data } = await Api.post<iUserTokenRegisterResponse>("/users", dataRegister);
            toastifySucess("Cadastro Efetuado!")
            setLoading(false)
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);

            const userData = JSON.stringify(data.user)
            localStorage.setItem("@USERINFO", userData);
            navigate("/home")
        } catch (error: any) {
            let err: string = ""
            if(error.response.data){
                err = error.response.data
            }else {
                err = "Não foi Possível Cadastrar"
            }
            if(err === "Email already exists") {
                err = "Este email já está registrado!"
            }
            toastifyFailed(err)
            setLoading(false);
        }
    }

    //Login

    const onSubmitLogin = async (dataLogin: iUserDataLogin) => {
        console.log(dataLogin)
        try {
            const response = await Api.post("/session", dataLogin);
            
            console.log(response)

           const {user: userResponse, token} = response.data
           setUser(userResponse)

            window.localStorage.setItem("@TOKEN", token)
         
            toastifySucess("Login Realizado")
            
            navigate("/dashboard", {replace: true})
        } catch (error) {
            console.log(error)
            toastifyFailed("Email ou senha inválidos")
        }
    }

    const updateUserData = async (data: iUpdateUserData) => {
        const token = localStorage.getItem("@TOKEN");

        try {
            await Api.patch(`/users/${userId}`, data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            toastifySucess("Usuário atualizado")
            navigate("/dashboard")
        } catch (error) {
            console.error(error)
            toastifyFailed("Ops algo deu errado")
        }
    }

    const updateUserImageData = async (data: iUpdateUserImageData) => {
        const token = localStorage.getItem("@TOKEN");

        try {
            await Api.patch(`/users/${userId}/image`, data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            toastifySucess("Usuário atualizado")
            navigate("/dashboard")
        } catch (error) {
            console.error(error)
            toastifyFailed("Ops algo deu errado")
        }
    }

    return (
        <UserContext.Provider 
            value={{
                setModalAddOpen, 
                updateUserData, 
                updateUserImageData, 
                setLoading, onSubmitRegister, 
                onSubmitLogin,
                setUserState, 
                setUserData, 
                setUser, 
                loading, 
                modalAddOpen, 
                userData, 
                userState, 
                user}}
        >{children}</UserContext.Provider>
    )
}




