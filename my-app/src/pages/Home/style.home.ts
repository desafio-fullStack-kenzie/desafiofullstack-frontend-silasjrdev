import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  width: 98px;
  height: 37px;
  background: ${({ theme }) => theme.colors.white.primary};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.rgb.tertiary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray.colorGray2};
  text-decoration: none;

`

export const Container = styled.main`


    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 875px;
    background-color: ${({ theme }) => theme.colors.gray.colorGray3};

    h1{

        font-size: var(--font-size-18px);
        font-weight: var(--font-weight-700);
        color: var(--color-grey-0);
        width: 84%;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 20px;
    }

    p{

        font-size: var(--font-size-16px);
        font-weight: var(--font-weight-400);
        color: var(--color-grey-0);
        margin-top: 10px;
        width: 84%;
        margin: 0 auto;
    }
`