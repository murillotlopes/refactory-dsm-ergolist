import styled from 'styled-components'

export const ContainerDash = styled.div`
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    >div{
        width: 40%;
        min-width: 200px;

        height: 300px;

        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }
`

export const NovaAvaliacao = styled.div`
    
    height: 100px;
    width: 100px;

    background-color: var(--primary-red);
    
`