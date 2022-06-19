import styled from "styled-components";

export const ContainerQuestoes = styled.div`
    
    width: 50%;

    margin: 0 auto;
    padding: 40px;

    background-color: var(--gray-100);

    border-radius: var(--radius);
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`

export const Form = styled.form`
    border-radius: var(--radius);
    background-color: white;
    
    padding: 20px;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
`

export const Resposta = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;

    height: 250px;

    .coluna-esquerda{
        width: 60%;

        button{
            width: 100%;
            background-color: var(--white);
            color: var(--secundary-blue);
            font-weight: bold;
            border: none;
            font-size: 18px;

        }
    
        button:hover, button:focus{
            background-color: var(--secundary-blue);
            color: var(--white);
            border: none;
        }
    
        input {
            width: 100%;
            margin-top: 30px;
            border: 1px solid #000;
            border-radius: var(--radius);
        }
    }

    .coluna-direita{
        margin-left: 60px;

        button{
            margin-left: 10px;
            flex-wrap: rap;
            justify-content: flex-end;
            flex-direction: row;
            display: inline-block;
            position: relative;
            background-color: var(--white);
            color: var(--secundary-blue);
            font-weight: bold;
            border: 1px solid var(--secundary-blue);
        }

        button:hover, button:focus{
            background-color: var(--secundary-blue);
            color: var(--white);
            border: none;
        }
        
        button svg {
            font-size: 25px;
        }
    }

    @media (max-width: 1462px){
        .coluna-direita{
            button{
                margin-left: 0px;
                flex-direction: column;
            }
        }
    }
`