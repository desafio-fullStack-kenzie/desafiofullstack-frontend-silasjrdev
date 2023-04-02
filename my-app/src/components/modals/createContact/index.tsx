import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaContactRegister } from "../../../validations/contacts/contactUser";
import { iContactDataRegister } from "../../../interface/contacts";
import { ContactContext } from "../../../contexts/contactsContext";
import * as S from "./style.contactModal"
import StyledInput from "../../input/style.input";
import { useContext } from "react";
import Button from "../../button/style.button";

const ModalCreateContact = () => {
    const {postContactData, setModalAddOpen } = useContext(ContactContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iContactDataRegister>({
        resolver: yupResolver(formSchemaContactRegister)
    });

    return (
        <>
            <S.DivMain>
                <S.DivContainer>
                    <S.ButtonClose>
                        <button onClick={() => {
                            setModalAddOpen(false);
                        }}>
                            X
                        </button>
                    </S.ButtonClose>
                    <S.Title>
                        <h1>Criar Contato</h1>
                    </S.Title>

                    <S.FormDivContainer>
                        <S.Form onSubmit={handleSubmit(postContactData)}>
                            <label htmlFor="fullName">
                                Nome Completo
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="fullName"
                                placeholder="Digite seu nome Completo"
                                {...register("fullName")}
                                />
                                <div>
                                    <span>{errors.fullName?.message}</span>
                                </div>
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
                                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required
                                {...register("contact")}
                                />
                                <div>
                                    <span>{errors.contact?.message}</span>
                                </div>
                            </label>

                            <S.Title>
                                <h1>Dados de Endereço</h1>
                            </S.Title>

                            <label htmlFor="city">
                                Cidade
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="city"
                                placeholder="Cidade onde mora"
                                {...register("address.city")}
                                />
                                <div>
                                    <span>{errors.address?.city?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="state">
                                Estado
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="state"
                                placeholder="Estado onde mora"
                                {...register("address.state")}
                                />
                                <div>
                                    <span>{errors.address?.state?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="zipCode">
                                CEP
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="zipCode"
                                placeholder="Cep de onde mora"
                                {...register("address.zipCode")}
                                />
                                <div>
                                    <span>{errors.address?.zipCode?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="district">
                                Bairro
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="district"
                                placeholder="Bairro onde mora"
                                {...register("address.district")}
                                />
                                <div>
                                    <span>{errors.address?.district?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="number">
                                Numero
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="number"
                                placeholder="Número onde mora"
                                {...register("address.number")}
                                />
                                <div>
                                    <span>{errors.address?.number?.message}</span>
                                </div>
                            </label>

                            <Button font="secondary" type="submit">
                                Cadastrar
                            </Button>
                            
                        </S.Form>
                    </S.FormDivContainer>
                </S.DivContainer>
            </S.DivMain>
        </>
    )
}

export default ModalCreateContact;
