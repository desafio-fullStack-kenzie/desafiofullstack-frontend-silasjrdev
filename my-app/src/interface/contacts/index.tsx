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
    id:string
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
    loading?: boolean
    getContactData?: () => Promise<void>
    postContactData?: (data: any) => Promise<void>
    deleteContactData?: (id: string) => Promise<void>
    updateContactData?: (data: any) => Promise<void>
    updateContactAddressData?: (data: any) => Promise<void> 
}

export type {iContactProviderProps, iContactDataRegister, iContactDataRegisterResponse, iContactData, iContactContextProps, iContactUpdate, iContactAddressUpdate}