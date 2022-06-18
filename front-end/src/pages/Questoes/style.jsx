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
    }

    .coluna-direita{
        width: 40%;
    }

`