import {createContext, useContext, useEffect, useState} from "react"
import { iContactAddressUpdate, iContactContextProps, iContactData, iContactDataRegisterResponse, iContactProviderProps, iContactUpdate } from "../../interface/contacts"
import { Api } from "../../services/api"
import { toastifySucess, toastifyFailed } from "../../components/toastify"
import {useNavigate, useParams} from "react-router-dom"
import { UserContext } from "../AuthUserContext"

export const ContactContext = createContext({} as iContactContextProps );

const ContactProvider = ({children}: iContactProviderProps) => {
    const [contactData, setContactData] = useState([] as iContactDataRegisterResponse[])
    const {user} = useContext(UserContext)
    const [loading, setLoading] = useState<boolean>(false)
    const [modalAddOpen, setModalAddOpen] = useState<boolean>(false)
    const {contactId} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        async function loadContact() {
            const token = localStorage.getItem("@TOKEN");

            if (token) {
                try {
                    const {data} = await Api.get("/contacts", {
                        headers:{
                            Authorization: `Bearer ${token}`,
                        }
                    })

                    setContactData(data)
                    setLoading(true)
                } catch (error) {
                    console.error(error)
                }
            }
            setLoading(false)
        }
        loadContact()
    }, [])




    const postContactData = async (data: iContactContextProps) =>{
        try {
            await Api.post("/contacts", data)
            toastifySucess("Contato Adicionado a sua agenda!")
            navigate("/dashboard", {replace:true})
        } catch (error) {
            toastifyFailed("Ops! Algo Deu errado")
            console.error(error)
        }
    }

    const deleteContactData = async (id: string) => {
        try {
            await Api.delete(`/contacts/${id}`)
            navigate('/dashboard', { replace:true })
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    const updateContactData = async (data: iContactUpdate) => {
        const token = localStorage.getItem("@TOKEN")

        console.log(contactId)
        

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
            console.error(error)
            toastifyFailed("Ops algo deu errado")
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
            console.error(error)
            toastifyFailed("Ops algo deu errado")
        }
    }

    return (
        <ContactContext.Provider value={{
            postContactData,
            deleteContactData,
            updateContactAddressData,
            updateContactData,
            setModalAddOpen,
            setLoading,
            setContactData,
            user,
            contactData,
            loading,
            modalAddOpen
        }}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactProvider;
