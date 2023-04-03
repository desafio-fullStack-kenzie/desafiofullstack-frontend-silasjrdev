import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.white.primary};
	display: flex;
    align-items: center;
    justify-content: end;
    height: 80px;
    box-shadow: 1px 3px 9px 0px rgba(255,87,127,1);
    -webkit-box-shadow: 1px 3px 9px 0px rgba(255,87,127,1);
    -moz-box-shadow: 1px 3px 9px 0px rgba(255,87,127,1);

nav{

    display: flex;
    gap: 30px;
    margin-right: 20px;
    width: 15%;
}

img{
    margin-left: 115px;
}

a{
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    font-size: var(--font-size-12px);
    font-weight: var(--font-weight-400);
    background-color: var(--color-primary-negative);
    width: 99px;
    height: 32px;
    border-radius: 4px;
}

@media (max-width: 768px){
    flex-wrap: wrap;

    nav{
        margin: 0 auto;
    }

    img{
        margin: 0 auto;
    }
}

@media (max-width: 375px){
    flex-wrap: wrap;

    nav{
        margin: 0 auto;
        gap: 30px;

    }

    img{
        margin: 0 auto;
    }
}

@media (max-width: 320px){
    flex-wrap: wrap;

    nav{
        margin: 0 auto;
        gap: 15px;

    }

    img{
        margin: 0 auto;
    }

    a{
        width: 90px;
        height: 32px;
    }
}

    /* div {
        height: 69px;
		border-radius: 8px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 42%;
		margin: auto;
    }

    img {
        max-height: 79px;
		max-width: 64px;
    }

    @media (max-width: 768px) {
		div {
			width: 90%;
		}
	} */
`

export default StyledHeader;