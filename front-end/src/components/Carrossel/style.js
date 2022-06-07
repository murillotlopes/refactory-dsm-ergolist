import styled from 'styled-components'

export const ContainerCarrossel = styled.div`
    // box-shadow: 1px 1px 10px 1px black;

    display: block;

    p {
        margin: 25% 3em;
        font-size: 18px;
        text-align: justify;
    }

    @mixin for-big-desktop-up {
        @media (min-width: 1000px) { 
            p { font-size: 64px } }
      }

`