import { useContext } from "react"
import { ContactContext } from "../../contexts/contactsContext"
import * as S from "./style.cardContact"
import { iContactData, iContactDataRegisterResponse } from "../../interface/contacts"
import {ButtonLink} from "../button/style.button"
import {CgTrash} from 'react-icons/cg'

export const CardContact =() => {
    const {contactData, deleteContactData} = useContext(ContactContext)

    return (
        <>
            <S.Container>
                {contactData?.map((data: iContactDataRegisterResponse, index: number) =>{
                    return(
                        <>
                        <S.Container id={`${data.id}`} key={`${data.id}`}>
                                <ul>
                                    <li>
                                        <span>Nome: {data.fullName}</span>
                                        <span>Email: {data.email}</span>
                                        <span>Contato: {data.contact}</span>
                                        <div>
                                            <span>Endereço do Contato:</span>
                                            <span>Estado: {data.address.state}</span>
                                            <span>Cidade: {data.address.city}</span>
                                            <span>Bairro: {data.address.district}</span>
                                            <span>Número: {data.address.number}</span>
                                            <span>CEP: {data.address.zipCode}</span>
                                        </div>

                                        <ButtonLink font="secondary" to={`updateContact/${data.id}`}>Editar Contato</ButtonLink>
                                        <ButtonLink font="secondary" to={`updateAddressContact/${data.id}`}>Editar Endereço</ButtonLink>

                                    
                                    </li>
                                        <button className="divList" onClick={() => {deleteContactData(data.id)}}><CgTrash size={25} color="black" /></button>
                                </ul>
                        </S.Container>

                        </>
                    )
                })}
            </S.Container>
        </>
    )
}