import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
    }

    a{
        text-decoration: none;
    }

    :root{
        --radius: 8px;
        --primary-red: #B20000;
        --primary-red-dark: #931914;
        --secundary-blue-dark: #005c6e;
        --secundary-blue: #2bb8c9;
        --gray-900: #333333;
        --white: #f3f3f3;
    }

    button{
        cursor: pointer;
        border: none;
    }
`