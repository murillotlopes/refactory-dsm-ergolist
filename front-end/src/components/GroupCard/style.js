import styled from "styled-components";

export const GroupCardStyle = styled.div`
    height: 200px;
    width: 250px;

    text-align: center; 

    margin: 25px 40px 25px 0;
    padding: 15px 20px 15px 15px;

    background-color: var(--white);

    border-radius: 5px;

    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

    grid-template: 100px 1fr / 50px 1fr;

    max-width: 100%;

    h2 {
        font-size: 2.5em
    }
`