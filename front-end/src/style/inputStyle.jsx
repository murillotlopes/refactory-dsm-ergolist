import styled from 'styled-components'

export const Input = styled.div`
            border: 0.5px solid var(--gray-200);
            border-radius: 8px;
            width: 100%;
            height: 55px;

            display: flex;
            flex-direction: column;

            margin-bottom: 20px;

            input{
                border: none;
                padding: 16px 12px;
                border-radius: 8px;
                font-size: 16px;
            }

            span{
                color: var(--primary-red-light);
                margin: 0 12px;
                font-size: 12px;
                transform: translateY(-18px);
            }
`