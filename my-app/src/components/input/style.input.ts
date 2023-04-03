import styled, {css} from "styled-components"
import { iStyleProps } from "../../interface/styled"

const StyledInput = styled.input`

    width: 100%;
    padding: 0 10px 0 10px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.white.tertiary};

    ${({font}:iStyleProps) =>{

        switch (font) {
            case "primary":
                return css`
                    height: 50px;
                    margin-top:5px;
                `
            case "secondary":
                return css`

                    height: 40px;
                    margin-top:5px;
                `
        }
    }}
`

export default StyledInput