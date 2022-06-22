import styled from "styled-components";

export const ContainerFooter = styled.footer`

    min-height: 4rem;
    background-color: var(--primary-red-dark) ;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;


    margin-top: 64px;

    img {
        display: flex;
        margin: 4px 0 0 40px;
        width: 130px;
        tewxt-align: center;
    }

    div{
        width: 900px;
        margin: 0 auto;
    }

    div ul{
        display: flex;
        list-style: none;
        margin-left: 60em;
    }

    div li{
        margin: 0 1em;
    }

    div ul li{
        margin-top: -40px;
    }


    div ul li svg{
        width: 20px;
        height: 20px;
        color: var(--white);
        cursor: pointer;
        float: right;

    }

    @media (max-width: 1400px) {
        div ul{
            margin-left: 50em;
        }
    }

    @media (max-width: 1090px) {
        div ul{
            margin-left: 45em;
        }
    }

    @media (max-width: 912px) {
        div ul{
            margin-left: 35em;
        }


    @media (max-width: 750px) {
        div ul{
            margin-left: 30em;
        }
    }

    @media (max-width: 670px) {
        div ul{
            margin-left: 25em;
        }
    }

    @media (max-width: 580px) {
        div ul{
            margin-left: 20em;
        }
    }

    @media (max-width: 510px) {
        div ul{
            margin-left: 15em;
        }
    }

    @media (max-width: 450px) {
        div ul{
            margin-left: 10em;
        }
    }
`