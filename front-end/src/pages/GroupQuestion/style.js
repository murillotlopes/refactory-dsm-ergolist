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