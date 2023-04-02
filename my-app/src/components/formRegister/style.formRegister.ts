import { Link } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`

    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px 0 30px;
    gap: 1rem;
    width: 100%;

    h1 {
        font-size: ${({theme}) => theme.typography.fontSize.fontSize2forRem};
        font-weight: ${({theme}) => theme.typography.fontWeight.fontWeight500};
        line-height: 24px;
        color: ${({theme}) => theme.colors.white.primary};
        text-align: center;
    }

    p {
        font-size: ${({theme}) => theme.typography.fontSize.fontSize10px};
        font-weight: ${({theme}) => theme.typography.fontWeight.fontWeight500};
        line-height: 24px;
        color: color: ${({theme}) => theme.colors.white.secondary};
        text-align: center;
    }

    label {
        font-size: ${({theme}) => theme.typography.fontSize.fontSize10px};
        color: ${({theme}) => theme.colors.white.tertiary}
        font-weight: ${({theme}) => theme.typography.fontWeight.fontWeight200}
    }

    div{
        border: 1px transparent solid;
        width: 100%;
        height: 10px;
    }

    span {
        font-size: ${({theme}) => theme.typography.fontSize.fontSize10px};
    }
`;

export const Div = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
`;

export const Container = styled.div`

    background-color: ${({ theme }) => theme.colors.gray.primary};
	width: 500px;
	height: 650px;
	border-radius: 0 8px 8px 0;
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: ${({theme}) => theme.typography.fontSize.fontSize2forRem};
		font-weight: ${({theme}) => theme.typography.fontWeight.fontWeight500};
		line-height: 24px;
		color: ${({ theme }) => theme.colors.white.primary};
		text-align: center;
	}

	.help-text {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
		font-weight: 200;
		color: ${({ theme }) => theme.colors.white.primary};
		text-align: center;
		gap: 0.3rem;
	}

	@media screen and (max-width: 900px) {
		width: 90%;
		display: flex;
		flex-direction: column;
	}
`

export const LinkStyled = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	width: 70px;
	height: 30px;
	padding: 10px;
	border-radius: 8px;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.gray.secondary};
	font-weight: 200;
	background-color: ${({ theme }) => theme.colors.gray.tertiary};
`;