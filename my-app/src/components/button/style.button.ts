import styled, {css} from "styled-components";
import { iStyleProps } from "../../interface/styled";
import { Link } from "react-router-dom";

const Button = styled.button`
    ${({font}: iStyleProps) =>{
        switch(font) {
            case 'primary':
                return css`
                    width: 100%;
                    height: 50px;
                    padding: 0 10px 0 10px;
                    border-radius: 20px;
                    background-color: ${({theme}) => theme.colors.primary.primaryFocus};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.white.primary};
                    font-size: 18px;

                    &:hover {
                        filter: brightness(0.9)
                    }
                `;
            case 'secondary':
                return css`
                    width: 100%;
                    height: 45px;
                    padding: 0 10px 0 10px;
                    border-radius: 20px;
                    background-color: ${({theme}) => theme.colors.primary.primaryNegative};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.white.primary};
                    font-size: 18px;

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'tertiary':
                return css`
                    width: 70%;
                    height: 35px;
                    padding: 0 10px 0 10px;
                    border-radius: 20px;
                    background-color: ${({theme}) => theme.colors.primary.primaryFocus};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.white.primary};
                    font-size: 16px;

                    &:hover {
                        filter: brightness(0.9)
                    }
                `
        }
    }}
`
const ButtonLink = styled(Link)`
    ${({font}: iStyleProps) =>{
        switch(font) {
            case 'primary':
                return css`
                    width: 15%;
                    height: 40px;
                    padding: 0 10px 0 10px;
                    border-radius: 5px;
                    background-color: ${({theme}) => theme.colors.primary.primaryNegative};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.white.primary};
                    font-size: 16px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;

                    &:hover {
                        filter: brightness(0.9)
                    }
                `;
            case 'secondary':
                return css`
                    width: 90%;
                    height: 45px;
                    padding: 0 10px 0 10px;
                    border-radius: 5px;
                    background-color: ${({theme}) => theme.colors.primary.primaryNegative};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.white.primary};
                    font-size: 18px;
                    text-align: center;
                    margin: 15px auto 0px auto;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
        }
    }}
`

export {Button, ButtonLink}