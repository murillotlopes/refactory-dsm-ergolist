import styled from "styled-components";

export const ContainerFooter = styled.footer`

    height: 60px;
    background-color: var(--primary-red) ;
    position: absolute ;
    bottom:0;
    width: 100% ;

    margin-top: 64px;

    div{
        width: 900px;
        border: 1px solid black ;
        margin: auto;
    }

    div ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
    }

    a{
        color: var(--white);
    }
`