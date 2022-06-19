import styled from 'styled-components'

export const ContainerDash = styled.div`
        

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    >div{
        padding: 20px;
        width: 40%;
        min-width: 200px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        height: 400px;
        border-radius: var(--radius);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }
    input {
        margin-bottom: 30px;
    }

    h3{
        text-transform: uppercase;
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        text-align: center;
    }
`

export const NovaAvaliacao = styled.div`
    
    color: var(--white);
    
    height: 100px;
    width: 200px;

    border-radius: var(--radius);
    background-color: var(--secundary-blue);

    display: flex;
    justify-content: center;
    align-items: center;

`