
import StyledHeader from "../../components/header/style.header"
import * as S from "./style.home"

const Home = () => {
    return(
        <>
        <S.Container>
            <StyledHeader>
                <nav>
                    <S.LinkStyled to={"/session"}>Login</S.LinkStyled>
                    <S.LinkStyled to={"/register"}>Registre-se</S.LinkStyled>
                </nav>
            </StyledHeader>
                <h1>Que pena! Estamos em desenvolvimento :(</h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </S.Container>
        </>
    )
}

export default Home;