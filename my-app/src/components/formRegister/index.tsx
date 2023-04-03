import {Button} from "../button/style.button";
import StyledInput from "../input/style.input";
import * as S from "./style.formRegister"

import { useForm } from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup"
import { UserContext } from "../../contexts/AuthUserContext";
import { iUserDataRegister } from "../../interface/users";
import formSchemaUserRegister from "../../validations/users/registerUser";
import { useContext } from "react";

const FormUserRegister = () => {
    const {onSubmitRegister} = useContext(UserContext)
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<iUserDataRegister>({
        resolver: yupResolver(formSchemaUserRegister),
    });


    return (
        <>
            <S.Container>
                <h1>Cadastro</h1>
                <S.Div>
                    <S.LinkStyled to="/session">Voltar</S.LinkStyled>
                </S.Div>
                <S.Form onSubmit={handleSubmit(onSubmitRegister)}>
                    <label htmlFor="fullName">
                        Nome Completo
                        <StyledInput 
                        font="secondary"
                        type="text"
                        id="fullName"
                        placeholder="Digite seu nome completo"
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
                        {...register("contact")}
                        />
                        <div>
                            <span>{errors.contact?.message}</span>
                        </div>
                    </label>

                    <label htmlFor="imageUrl">
                        Imagem de Perfil
                        <StyledInput
                        font="secondary"
                        type="text"
                        id="imageUrl"
                        placeholder="Adicione a Url da sua imagem"
                        {...register("imageUrl")}
                        />
                        <div>
                            <span>{errors.imageUrl?.message}</span>
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

                    <Button font="primary" type="submit">
                        Cadastrar
                    </Button>
                </S.Form>
                <span className="help-text">
                    já possui conta?
                    <S.LinkStyled to={"/session"}>Faça login</S.LinkStyled>
                </span>
            </S.Container>
        </>
    )
}

export default FormUserRegister;