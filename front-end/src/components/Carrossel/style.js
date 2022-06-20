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
    position: relative;
    
    > img {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
        
        filter: grayscale(300%);
        filter: brightness(50%);
        opacity: 0.08;

        max-width: 100%;
    }
`