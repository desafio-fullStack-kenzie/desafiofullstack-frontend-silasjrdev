import styled from "styled-components"

export const Container = styled.div`

    background-color: var(--color-grey-3);
    width: 95%;
    max-height: 600px;
    padding: 20px;
    border-radius: 4.06px;
    margin: 0 auto;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 5px;
    }

    ::-webkit-scrollbar-track {

        box-shadow: inset 0 0 5px var(--color-grey-2); 
        border-radius: 0px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-primary-Focus); 
        border-radius: 2px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary-negative); 
    }


    ul{

        padding: 0px;
        display: flex;
        margin: 0 auto;
        width: 60%;
        li{ 
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: start;
            justify-content: space-between;
            background-color: ${({theme}) => theme.colors.gray.colorGray2};
            border: 0.5px solid var(--color-grey-2);
            margin-top: 20px;
            width: 60%;
            height: 20%px;
            padding: 20px;
            border-radius: 4px 0px 0px 4px ;

            div{
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            span{
                
                color: white;
                font-size: 14.21px;
                font-weight: var(--font-weight-700);
            }
         }

         .divList{
                display: flex;
                align-items: center;
                margin-top: 20px;
            	height: 40vh;
                background: ${({theme}) => theme.colors.gray.colorGray0};
                border-radius: 0px 200px 20px 0px;
                color: var(--color-white);
                font-size: 200px;
            }
    }

    @media (max-width: 1024px){
        ul{
            li{
                width: 50vw;
            }
        }

    }
    @media (max-width: 425px){
        width: 90%;

        ul{
            li{
                width: 75vw;
            }
        }
    }

    @media (max-width: 375px){
        width: 90%;

        ul{
            li{
                width: 70vw;
            }
        }
    }

`