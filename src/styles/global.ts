import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body{
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.baseText};
    width: 80%;
    margin: 0 auto;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #EDEDED inset !important;
  }

  

  @media (max-width: 768px){
    img{
      object-fit: cover;
    }

    html{
      font-size: 50%;
    }
  }
`