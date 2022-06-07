import styled from 'styled-components'

export const ContainerHomeForm = styled.div`
    padding: 20px;

    

    form {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3{
            text-transform: uppercase;
            //font-family: 'Roboto Slab', serif;
            font-weight: 700;
            margin: 25px auto;
            font-size: 30px;
        }

        p{
            margin-bottom: 10px;
            font-size: 14px;

            strong{
                cursor: pointer;
            }
        }
    }
`