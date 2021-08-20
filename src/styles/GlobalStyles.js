import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
 *,
 *::after,
 *::before {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
  body, html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fontFamily};
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    overflow: hidden;
  }
  a{
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: none;
  }
  a:hover{
    color: ${({ theme }) => theme.primaryText};
  }
  h1, h2, h3, h4, h5, h6{
    margin: 10px 0;
    line-height: 120%;
    color: ${({ theme }) => theme.primaryText};
  }
  p{
    font-size: 1rem;
    margin: 0;
    line-height: 140%;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.primaryText};
  }
  ul{
    list-style: none;
    padding: 0;
    font-size: 0.875rem;
    line-height: 130%;
  }

  button{
    background-color: transparent;
  }

  img{
    width:100%;
  }
  `;
