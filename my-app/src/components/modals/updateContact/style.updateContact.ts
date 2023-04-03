import styled from "styled-components";

export const DivMain = styled.div`
    position: fixed;

    background-color: ${({theme}) => theme.colors.gray.colorGray4};

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
`;

export const DivContainer = styled.div`
    background-color: ${({theme}) => theme.colors.gray.colorGray0};
    width: 80%;
    padding-bottom: 5px;
    border-radius: 10px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
`

export const ButtonClose = styled.div`
    display: flex;
    justify-content: end;
    padding: 10px;

    button {
        background-color: ${({theme}) => theme.colors.gray.colorGray2};
        width: 30px;
        height: 30px;
        border-radius: 4px;
        font-size: 18px;
        color: ${({theme}) => theme.colors.white.secondary};
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 37px;

    h1 {
        font-size: ${({theme}) => theme.typography.fontSize.fontSize2forRem};
        font-weight: ${({theme}) => theme.typography.fontWeight.fontWeight500};
        color: ${({theme}) => theme.colors.white.secondary};
    }
`
export const FormDivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    padding: 0 30px 0 30px;

    label{
        fon-size: 0.9rem;
        color: ${({theme}) => theme.colors.white.primary};
        font-weight: ${({theme}) => theme.typography.fontWeight.fontWeight200};
    }

    div {
        border: 1px transparent solid;
        width: 100%;
        height: 15px;
        span{
            font-size: ${({theme}) => theme.typography.fontSize.fontSize10px};
        }
    }
`