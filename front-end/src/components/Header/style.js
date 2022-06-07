import styled from "styled-components";

export const ContainerHeader = styled.header`
    height: 100px;

    display: flex;
    justify-content: center ;
    align-items: center;
    background-color: var(--primary-red);

    margin-bottom: 64px ;

    h1 {
        //box-shadow: 2px 2px 10px var(--white);

        padding: 13px;
        //border-radius: var(--radius) ;
    }

    h1:active{
        //background-color: var(--primary-red-dark) ;
        box-shadow: 1px 1px 10px var(--white);
    }
    
    h1 a{
        color: var(--white);
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        text-decoration: none;
    }
`