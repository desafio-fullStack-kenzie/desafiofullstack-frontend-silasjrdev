import { useContext } from "react"
import { ContactContext } from "../../../contexts/contactsContext"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { iContactAddressUpdate, iContactUpdate } from "../../../interface/contacts"
import {formSchemaUpdateAddressContact} from "../../../validations/contacts/contactUser"
import * as S from "../../modals/createContact/style.contactModal"
import StyledInput from "../../input/style.input"
import Button from "../../button/style.button"

const ModalUpdateAddressContact = () => {
    const {updateContactAddressData, setModalAddOpen} = useContext(ContactContext)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<iContactAddressUpdate>({
        resolver: yupResolver(formSchemaUpdateAddressContact)
    })

    return (
        <>
            <S.DivMain>
                <S.DivContainer>
                    <S.ButtonClose>
                        <button onClick={() => {
                            setModalAddOpen(false)
                        }}>
                            X
                        </button>
                    </S.ButtonClose>
                    <S.Title>
                        <h1>Atualizar Contato</h1>
                    </S.Title>

                    <S.FormDivContainer>
                        <S.Form onSubmit={handleSubmit(updateContactAddressData)}>
                        <label htmlFor="city">
                                Cidade
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="city"
                                placeholder="Cidade onde mora"
                                {...register("city")}
                                />
                                <div>
                                    <span>{errors.city?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="state">
                                Estado
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="state"
                                placeholder="Estado onde mora"
                                {...register("state")}
                                />
                                <div>
                                    <span>{errors.state?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="zipCode">
                                CEP
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="zipCode"
                                placeholder="Cep de onde mora"
                                {...register("zipCode")}
                                />
                                <div>
                                    <span>{errors.zipCode?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="district">
                                Bairro
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="district"
                                placeholder="Bairro onde mora"
                                {...register("district")}
                                />
                                <div>
                                    <span>{errors.district?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="number">
                                Numero
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="number"
                                placeholder="Número onde mora"
                                {...register("number")}
                                />
                                <div>
                                    <span>{errors.number?.message}</span>
                                </div>
                            </label>

                            <Button font="secondary" type="submit">
                                Atualizar Contato
                            </Button>

                        </S.Form>
                    </S.FormDivContainer>
                </S.DivContainer>
            </S.DivMain>
        </>
    )
}

export default ModalUpdateAddressContact;