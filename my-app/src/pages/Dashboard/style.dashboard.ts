import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledContainer = styled.main`
  background-image:  ${({ theme }) => theme.colors.primary.primaryNegative};
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;

  display: flex;
  min-height: 70vh;
  flex-direction: column;
  div {
    padding-top: 30px;
  }
  ul {
    display: flex;
    gap: 0.1rem;
    padding-bottom: 25px;

    display: flex;
    justify-content: flex-start;

    align-items: center;
    overflow-x: scroll;
    flex-wrap: nowrap;
    padding: 26px;

    @media (min-width: 769px) {
      flex-wrap: wrap;
      align-items: center;
      overflow-x: auto;
      justify-content: center;
    }
  }
`;

export const LinkModal = styled(Link)`
        display: flex;
        width: 60%;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 20px;

        h1{

            font-size: var(--font-size-18px);
            font-weight: var(--font-weight-700);
            color: var(--color-grey-0);
        }

        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32.49px;
            height: 32px;
            background-color: ${({ theme }) => theme.colors.primary.primaryFocus}
            color: white;
            font-size: 16px;

        }

`

export const CardUser = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;

    width: 100%;
    height: 250px;
    margin-top: 25px;

    div{
      width: 95%;
      display: flex;
      justify-content: end;
      gap: 20px
    }

    h1{
        font-size: 18px
        font-weight: ${({ theme }) => theme.typography.fontWeight.fontWeight600};
        color: ${({ theme }) => theme.colors.primary.primaryFocus};
        margin-top: 50px;
    }

    
    img{
        width: 110px;
        margin-top: 20px;
    }  

    p{
        font-size: ${({ theme }) => theme.typography.fontSize12px};
        font-weight: ${({ theme }) => theme.typography.fontWeight.fontWeight400};
        color: ${({ theme }) => theme.colors.gray.colorGray0}
        margin-bottom: 30px;
    }           
`