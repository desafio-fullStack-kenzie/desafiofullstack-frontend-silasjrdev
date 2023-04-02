import styled, {css} from "styled-components";
import { iStyleProps } from "../../interface/styled";

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

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
        }
    }}
`

export default Button;