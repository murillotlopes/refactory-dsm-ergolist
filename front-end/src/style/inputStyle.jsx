import styled from 'styled-components'

export const Input = styled.div`
            border: 0.5px solid var(--gray-200);
            border-radius: 8px;
            width: 100%;
            height: 40px;

            display: flex;
            flex-direction: column;

            margin-bottom: 20px;

            input{
                border: none;
                padding: 8px 12px;
                border-radius: var(--radius);
                font-size: 12px;
            }

            span{
                color: var(--primary-red-light);
                margin: 10px 12px;
                font-size: 10px;
                transform: translateY(-18px);
            }
`