import { useContext } from "react"
import * as S from "../../modals/createContact/style.contactModal"
import { UserContext } from "../../../contexts/AuthUserContext"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchemaUpdateUser from "../../../validations/users/updateUser";
import { iUpdateUserData } from "../../../interface/users";
import StyledInput from "../../input/style.input";
import Button from "../../button/style.button";

const ModalUpdateUser = () => {
    const {updateUserData, setModalAddOpen} = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<iUpdateUserData>({
        resolver: yupResolver(formSchemaUpdateUser)
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
                        <h1>Atualizar Usuário</h1>
                    </S.Title>

                    <S.FormDivContainer>
                        <S.Form onSubmit={handleSubmit(updateUserData)}>
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
                                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required
                                {...register("contact")}
                                />
                                <div>
                                    <span>{errors.contact?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="password">
                                Senha
                                <StyledInput
                                font="secondary"
                                type="password"
                                id="password"
                                placeholder="Digite sua senha"
                                {...register("password")}
                                />
                                <div>
                                    <span>{errors.password?.message}</span>
                                </div>
                            </label>

                            <label htmlFor="confirmPassword">
                                Confirme sua senha
                                <StyledInput
                                font="secondary"
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirme sua senha"
                                {...register("confirmPassword")}
                                />
                                <div>
                                    <span>{errors.confirmPassword?.message}</span>
                                </div>
                            </label>

                            <Button font="secondary" type="submit">
                                Atualizar
                            </Button>

                        </S.Form>
                    </S.FormDivContainer>
                </S.DivContainer>
            </S.DivMain>
        </>
    )
}

export default ModalUpdateUser;