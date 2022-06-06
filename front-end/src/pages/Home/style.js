import styled from 'styled-components'

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > aside{
        width: 40%;
        min-width: 200px;

        box-shadow: 1px 1px 10px 1px var(--gray-900);
    }
`