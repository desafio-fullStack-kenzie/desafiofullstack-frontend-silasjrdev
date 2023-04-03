import { Outlet, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/AuthUserContext";
import { useContext } from "react";
import { ContactContext } from "../../contexts/contactsContext";
import { toastifySucess } from "../../components/toastify";
import StyledHeader from "../../components/header/style.header";
import * as S from "./style.dashboard"
import { Button, ButtonLink } from "../../components/button/style.button";
import { Link } from "react-router-dom";
import { CardContact } from "../../components/contacts";

const Dashboard = () => {
    
    const {userName, contactId, userId } = useParams()
    const navigate = useNavigate();
    
    //user
    const {setModalAddOpen, modalAddOpen, user} = useContext(UserContext)

    //contact
    const {contactData} = useContext(ContactContext)

    const logout = () => {
        window.localStorage.clear()
        navigate("/home")
        toastifySucess("Seção encerrada")
    }

    return(
        <>
            <StyledHeader>
                <nav>
                    <Button font="tertiary" onClick={logout}>Sair</Button>
                </nav>
            </StyledHeader>

            <S.CardUser>
                <div>
                    <ButtonLink font="primary" to={"updateContact/:contactId"}>Editar meus dados</ButtonLink>
                    <ButtonLink font="primary" to={"updateImageUser/:userId"}>Editar Foto Perfil</ButtonLink>
                </div>
                
                <h1>MINHA AGENDA DE CONTATOS</h1>
                <div>
                    <ButtonLink font="primary" to={"addContact"}>Adicionar Contatos</ButtonLink>
                </div>
            </S.CardUser>

            <S.StyledContainer>

                <CardContact/>

            </S.StyledContainer>
            
            <Outlet/>

        </>
    )

}

export default Dashboard;