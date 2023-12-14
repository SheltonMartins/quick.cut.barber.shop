import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme['beige100']};
        color: #000;
        font-family: 'Hedvig Letters Serif', sans-serif;
        font-weight: 100;
    }

`
