import styled from "styled-components";

export const ContainerGroupQuestion = styled.div`
    display: grid;
    
    grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));

    grid-gap: 25px;
    margin: 16px;

    button {        
        position: fixed;
        width: 250px;

        bottom: 80px;
        left: 50%;

        transform: translate(-50%);
        
        opacity: 0.8;       
    }
`

export const CabecalhoPesquisa = styled.div`
    text-align: center;

    div {
        width: 35%;
        min-width: 300px;
        margin: 0 auto;
        border-radius: var(--radius);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 10px;
    }

    h3 {
        text-transform: uppercase;
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        /* margin: 10px 0; */
        margin-bottom: 10px;
        font-size: 30px;
    }

    a {
        font-size: 20px;
        color: var(--primary-red);
        text-decoration: underline;
    }
`