import { useContext } from "react";
import { UserContext } from "../../../contexts/AuthUserContext";
import { useForm } from "react-hook-form";
import * as S from "./style.updateImageUser"
import { yupResolver } from "@hookform/resolvers/yup";
import formSchemaUpdateImage from "../../../validations/users/updateImageUser";
import { iUpdateUserImageData } from "../../../interface/users";
import StyledInput from "../../input/style.input";
import {Button} from "../../button/style.button";
import { useNavigate } from "react-router-dom";

const ModalUpdateImageUser = () => {
    const {updateUserImageData, setModalAddOpen} = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<iUpdateUserImageData>({
        resolver: yupResolver(formSchemaUpdateImage)
    })

    const navigate = useNavigate()

    function closeModal(){
        navigate("/dashboard", {replace: true})
    }

    return(
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
                        <S.Form onSubmit={handleSubmit(updateUserImageData)}>
                            <label htmlFor="imageUrl">
                                Caminho da Imagem
                                <StyledInput
                                font="secondary"
                                type="text"
                                id="ImageUrl"
                                placeholder="Digite seu nome completo"
                                {...register("imageUrl")}
                                />
                                <span>{errors.imageUrl?.message}</span>
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

export default ModalUpdateImageUser;