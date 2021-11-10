import { createGlobalStyle } from 'styled-components';

import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

export const GlobalStyles = createGlobalStyle`
 *,
 *::after,
 *::before {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
  }
  body, html {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 16px;
    height: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background-color: ${({ theme }) => theme.backgroundColor.tertiary};
    color: ${({ theme }) => theme.text};
    margin: 0;
  }
  a{
    color: ${({ theme }) => theme.accentColor.primary};
    text-decoration: none;
  }
  a:hover{
    color: ${({ theme }) => theme.accentColor.secondary};
  }
  h1, h2, h3, h4, h5, h6{
    color: ${({ theme }) => theme.neutralColor.textPrimary};
    margin: 10px 0;
    line-height: 120%;
  }
  h1{
    font-size: 1.6rem
  }
  h2{
    font-size: 1.4rem;
  }
  h3{
    font-size: 1.2rem;
  }
  p{
    color: ${({ theme }) => theme.neutralColor.textPrimary};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 0.925rem;
    letter-spacing: 0.05rem;
    line-height: 160%;
    margin: 0;
    white-space: normal;
  }
  ul{
    font-size: 0.875rem;
    line-height: 130%;
    list-style: none;
    padding: 0;
  }

  button{
    background-color: transparent;
  }

  img{
    width:100%;
  }

  .mobile-order{
      order: 2;
    }

  @media ${props => props.theme.media.fablet} {

    .mobile-order{
      order: 0;
    }

    h1{
      font-size: 2rem;
    }
    h2{
      font-size: 1.8rem;
    }
    h3{
      font-size: 1.5rem;
    }
  }

  `;
