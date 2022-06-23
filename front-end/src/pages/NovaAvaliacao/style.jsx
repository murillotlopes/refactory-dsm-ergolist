import styled from "styled-components";

export const ContainerNovaAvaliacao = styled.div`
    width: 50%;

    margin: 0 auto;

    border-radius: var(--radius);
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    
    textarea{
        resize: none;
    }
    
    button {
        display: block;
        cursor: pointer;
        text-align: center;
        width: 250px;
        margin-bottom: 20px;
    }
    @media (max-width: 1162px) {
        h3{
            text-align: center;
        }
    }

    @media (max-width: 720px) {
        button {
            width: 200px;
            text-size: 15px;
        }
    }

    @media (max-width: 490px) {
        button {
            width: 150px;
            text-size: 12px;
        }
    }

    @media (max-width: 420px) {
        button {
            width: 100px;
            text-size: 10px;
        }
    }
`