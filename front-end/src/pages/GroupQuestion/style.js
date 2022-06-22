import styled from "styled-components";

export const ContainerGroupQuestion = styled.div`
    display: grid;
    
    grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));

    grid-gap: 25px;
    margin: 16px;

    button {        
        width: 12.5%;

        position: absolute;
        bottom: 6.5%;
        left: 50%;
        right: 50%;

        transform: translate(-50%, -50%);
    }
`