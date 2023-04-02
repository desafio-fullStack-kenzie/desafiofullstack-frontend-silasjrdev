import * as S from "../formRegister/style.formRegister";
import Button from "../button/style.button";
import StyledInput from "../input/style.input";

import { useContext } from "react";
import { UserContext } from "../../contexts/AuthUserContext";
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { iUserDataLogin } from "../../interface/users";
import formSchemaUserSession from "../../validations/users/loginUser";

const FormSession = () => {
    const {onSubmitLogin} = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<iUserDataLogin>({
        resolver: yupResolver(formSchemaUserSession)
    });

    return (
        <>
            <S.Container>
                <h1>Login</h1>
                <S.Div>
                    <S.LinkStyled to="/home">Voltar</S.LinkStyled>
                </S.Div>
                <S.Form onSubmit={handleSubmit(onSubmitLogin)}>
                    <label htmlFor="email">
                        Email
                        <StyledInput
                        font="primary"
                        type="email"
                        id="email"
                        placeholder="Digite o email cadastrado"
                        {...register("email")}
                        />
                        <div>
                            <span>{errors.email?.message}</span>
                        </div>
                    </label>

                    <label htmlFor="password">
                        Senha
                        <StyledInput
                        font="primary"
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                        />
                        <div>
                            <span>{errors.password?.message}</span>
                        </div>
                    </label>

                    <Button font="Primary" type="submit">
                        Entrar
                    </Button>
                </S.Form>
                <span className="help-text">
                    Não possui conta?
                    <S.LinkStyled to={"/register"}>Registre-se</S.LinkStyled>
                </span>
            </S.Container>
        </>
    )
}

export default FormSession;