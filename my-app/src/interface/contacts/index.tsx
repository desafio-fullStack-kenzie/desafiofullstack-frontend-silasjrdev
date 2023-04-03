import { iUserData } from "../users"

interface iContactProviderProps {
    children: React.ReactNode
}

interface iAddressContactRequest{
    city: string
    state: string
    zipCode: string
    district: string
    number: string
}


interface iContactDataRegister {
    fullName: string
    email: string
    contact: string
    address: iAddressContactRequest
}

interface iContactUpdate {
    fullName?: string
    email?: string
    contact?: string
}

interface iContactAddressUpdate{
    id?:string
    city?: string
    state?: string
    zipCode?: string
    district?: string
    number?: string
}

interface iContactDataRegisterResponse {
    id: string
    email: string
    fullName: string
    contact: string
    address: iAddressContactRequest
}

interface iContactData {
    fullName?:string
    email?:string
    id?:string
    createdAt?:string
    updatedAt?:string
}

interface iContactContextProps {
    //get contact
    // loadContact: () => Promise<void>

    //post contact
    postContactData: (data: any) => Promise<void>

    //delete contact
    deleteContactData: (id: string) => Promise<void>

    //update contact
    updateContactData: (data: any) => Promise<void>

    //update address contact
    updateContactAddressData: (data: any) => Promise<void>
    
    //loading
    modalAddOpen?: boolean
    setModalAddOpen: React.Dispatch<React.SetStateAction<boolean>>
    
    //Globals
    loading?: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    
    contactData:iContactDataRegisterResponse[]
    setContactData: React.Dispatch<React.SetStateAction<iContactDataRegisterResponse[]>>

    user: iUserData | null

}

export type {iContactProviderProps, iContactDataRegister, iContactDataRegisterResponse, iContactData, iContactContextProps, iContactUpdate, iContactAddressUpdate}