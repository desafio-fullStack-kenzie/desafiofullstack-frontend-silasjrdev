import {createContext, useContext, useEffect, useState} from "react"
import { iContactAddressUpdate, iContactContextProps, iContactData, iContactProviderProps, iContactUpdate } from "../../interface/contacts"
import { Api } from "../../services/api"
import { toastifySucess, toastifyFailed } from "../../components/toastify"
import {useNavigate, useParams} from "react-router-dom"
import { UserContext } from "../AuthUserContext"

const ContactContext = createContext({} as iContactContextProps );

const {contactId} = useParams()

const ContactProvider = ({children}: iContactProviderProps) => {
    const [contactData, setContactData] = useState<iContactData[]>()
    const {user} = useContext(UserContext)
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const getContactData = async () => {
        try {
            const {data} = await Api.get("/contacts")
            setContactData(data)
            setLoading(true)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getContactData()
    },[])

    const postContactData = async (data: iContactContextProps) =>{
        try {
            await Api.post("/contacts", data)
            getContactData()
            toastifySucess("Contato Adicionado a sua agenda!")
        } catch (error) {
            toastifyFailed("Ops! Algo Deu errado")
            console.error(error)
        }
    }

    const deleteContactData = async (id: string) => {
        try {
            await Api.delete(`/contacts/${id}`)
            getContactData()
            navigate('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    const updateContactData = async (data: iContactUpdate) => {
        const token = localStorage.getItem("@TOKEN")

        try {
            await Api.patch(`/contacts/${contactId}`, data,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                    },
            });

            toastifySucess("Contato atualizado com sucesso")
            navigate("/dashboard")
        } catch (error) {
            
        }
    }
    const updateContactAddressData = async (data: iContactAddressUpdate) => {
        const token = localStorage.getItem("@TOKEN")

        try {
            await Api.patch(`/contacts/${contactId}/address`, data,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                    },
            });

            toastifySucess("Contato atualizado com sucesso")
            navigate("/dashboard")
        } catch (error) {
            
        }
    }

    return (
        <ContactContext.Provider value={{
            loading,
            getContactData,
            postContactData,
            deleteContactData,
            updateContactAddressData,
            updateContactData
        }}>
            {children}
        </ContactContext.Provider>
    )
}

