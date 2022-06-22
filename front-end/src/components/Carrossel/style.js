import styled from 'styled-components'
import img from '../../assets/images/logo_footer.png'

export const ContainerCarrossel = styled.div`
    // box-shadow: 1px 1px 10px 1px black;

    font-family: 'Roboto Slab', serif;

    p {
        margin: 25% 5em;
        font-size: 18px;
        text-align: justify;
        text-shadow: -0.5px 0.5px 1.2px rgba(0, 0, 0, 0.11);
        text-indent: 20px;
    }

    button {
        height: 100%;
    }
    
    `
    
    export const BgImage = styled.div`
    position: relative;
    
    > img {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
        
        filter: grayscale(300%);
        filter: brightness(50%);
        opacity: 0.065;

        max-width: 100%;
    }
`