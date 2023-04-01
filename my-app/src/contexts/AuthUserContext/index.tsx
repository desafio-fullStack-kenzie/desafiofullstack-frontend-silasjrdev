import {createContext, useEffect, useState} from "react"
import {useNavigate} from "react-router"
import { toastifySucess, toastifyFailed } from "../../components/toastify"
import { Api } from "../../services/api"
import { iAuthProviderProps, iResponseLogin, iUserContextProps, iUserData, iUserDataLogin, iUserDataRegister, iUserDataRegisterResponse, iUserTokenRegisterResponse } from "../../interface/users";

export const UserContext = createContext({} as iUserContextProps);

export default function UserProvider({children}: iAuthProviderProps) {
    const [loading, setLoading] = useState(true)
    const [userState, setUserState] = useState(false)
    const [userData, setUserData] = useState({})
    const [user, setUser] = useState<iUserData | null>(null)
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
        delete dataRegister.confirmPassword

        try {
            const { data } = await Api.post<iUserTokenRegisterResponse>("/users", dataRegister);
            toastifySucess("Cadastro Efetuado!")
            setLoading(false)
            localStorage.setItem("@TOKEN", data.accessToken);
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
        try {
            const { data } = await Api.post<iResponseLogin>("/session", dataLogin);
            Api.defaults.headers.authorization = `Bearer ${data.accessToken}`

            window.localStorage.setItem("@TOKEN", data.accessToken)
            window.localStorage.setItem("@USERID", data.user.id)

            if(data.accessToken){
                toastifySucess("Login Realizado")
            }
            setUser(data.user)
            navigate("/dashboard", {replace: true})
        } catch (error) {
            console.log(error)
            toastifyFailed("Email ou senha inválidos")
        }
    }

    return (
        <UserContext.Provider 
            value={{loading, setLoading, onSubmitRegister, onSubmitLogin, userState, setUserState, userData, setUserData,setUser, user}}
        >{children}</UserContext.Provider>
    )
}




