import { useContext } from "react"
import { ContactContext } from "../../../contexts/contactsContext"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { iContactUpdate } from "../../../interface/contacts"
import { formSchemaUpdateContact } from "../../../validations/contacts/contactUser"
import * as S from "./style.updateContact"
import StyledInput from "../../input/style.input"
import {Button} from "../../button/style.button"
import { useNavigate } from "react-router-dom"

const ModalUpdateContact = () => {
    const {updateContactData, setModalAddOpen} = useContext(ContactContext)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<iContactUpdate>({
        resolver: yupResolver(formSchemaUpdateContact)
    })

    const navigate = useNavigate()

    function closeModal(){
        navigate("/dashboard", {replace: true})
    }

    return (
        <>
            <S.DivMain>
                <S.DivContainer>
                    <S.ButtonClose>
                        <button onClick={closeModal}>
                            X
                        </button>
                    </S.ButtonClose>
                    <S.Title>
                        <h1>Atualizar Contato</h1>
                    </S.Title>

                    <S.FormDivContainer>
                        <S.Form onSubmit={handleSubmit(updateContactData)}>
                            <label htmlFor="fullName">
                                Nome Completo
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="fullName"
                                placeholder="Digite seu nome completo"
                                {...register("fullName")}
                                />
                                <span>{errors.fullName?.message}</span>
                            </label>

                            <label htmlFor="email">
                                Email
                                <StyledInput
                                font="secondary"
                                type="email"
                                id="email"
                                placeholder="Digite seu email"
                                {...register("email")}
                                />
                                <div>
                                    <span>{errors.email?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="contact">
                                Contato
                                <StyledInput
                                font="secondary"
                                type="tel"
                                id="contact"
                                placeholder="00-00000-0000"
                                {...register("contact")}
                                />
                                <div>
                                    <span>{errors.contact?.message}</span>
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

export default ModalUpdateContact;