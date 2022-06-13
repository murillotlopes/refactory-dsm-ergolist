import styled from "styled-components";

export const ContainerGroupQuestion = styled.div`
    display: grid;
    
    grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));

    margin: 45px;
    button {        
        width: 12.5%;

        position: fixed;
        bottom: 6.5%;
        left: 50%;
        right: 50%;

        transform: translate(-50%, -50%);
    
    }

`