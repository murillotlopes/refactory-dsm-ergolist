import styled from "styled-components";

export const ContainerGroupQuestion = styled.div`
    display: grid;
    
    grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));

    margin: 45px;
    button {
        background-color: black;
        padding: 25px 100px;
        

        position: fixed;
        bottom: 6.5%;
        left: 50%;
        right: 50%;

        transform: translate(-50%, -50%);
    
    }

`