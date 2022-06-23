import styled from "styled-components";

export const GroupCardStyle = styled.div`

    height: 225px;
    width: 100%;

    max-width: 300px;
    min-width: 150px;

    position: relative;
    
    margin: 5px 10px 5px 0;
    padding: 10px 15px 10px 10px;
    
    background-color: var(--white);

    border-radius: 5px;

    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

    grid-template: 100px 1fr / 50px 1fr;

    cursor: pointer;

    h2 {
        font-size: 20px;
        text-align: center;

        font-family: 'RobotoExtraLight', serif;
    }
    
    p {
        text-align: justify;
        font-size: 14px;

        font-family: 'Roboto Light', serif;
    }

`

export const ProgressBarStyle = styled.div`
    position: relative;
    
    text-align: left;
`
