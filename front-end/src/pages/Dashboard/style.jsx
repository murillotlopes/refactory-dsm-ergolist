import styled from 'styled-components'

export const ContainerDash = styled.div`
    padding: 20px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    >div{
        width: 40%;
        min-width: 200px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        height: 400px;
        border-radius: var(--radius);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    h3{
        text-transform: uppercase;
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        text-align: center;
    }

    p {
        padding: 0;
        margin: 0;
        margin-left: 10px;
        text-align: left;
        color: #020202;
        font-size: 15px;
    }

    h6{
        margin: 10px 10px;
        font-size: 15px;
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