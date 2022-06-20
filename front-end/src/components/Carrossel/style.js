import styled from 'styled-components'
import img from '../../assets/images/logo_footer.png'

export const ContainerCarrossel = styled.div`
    // box-shadow: 1px 1px 10px 1px black;

    font-family: 'Roboto Slab', serif;

    p {
        margin: 25% 5em;
        font-size: 18px;
        text-align: justify;
    }

    button {
        height: 100%;
    }
    
    `
    
    export const BgImage = styled.div`
    
    background: url(${img}); 
    background-size: 240px 240px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
`