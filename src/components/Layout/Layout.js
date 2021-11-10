import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../../hooks/useDarkTheme';
import { lightTheme, darkTheme } from '../Theme/ThemeConfig';
import { GlobalStyles } from '../../styles/GlobalStyles';

import CookieConsent from "react-cookie-consent";
import Wrapper from '../Basic/Wrapper';
import NavDesktop from './Navbar/NavDesktop';
import NavMobile from './Navbar/NavMobile';
import Container from '../Basic/Container';

import ThemeContext from '../Theme/ThemeContext';

const NavHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
`;

const Box = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  overflow-y: hidden;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accentColor.primary};
    border-radius: 3px;
}

@media ${props => props.theme.media.fablet} {
    height: 85vh;
    width: 85%;
    overflow-y: scroll;
  }

`;

const Layout = ({ children }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Wrapper>
        <Box>
          <Container>
            <NavHeader>
              <ThemeContext.Provider
                value={{ theme, themeToggler, mountedComponent }}
              >
                <NavDesktop />
                <NavMobile />
              </ThemeContext.Provider>
            </NavHeader>
          </Container>
          {children}
          <CookieConsent
            location="bottom"
            buttonText="Akceptuj"
            declineButtonText="Odrzuć"
            style={{ background: "#fff", color: "#F26531", borderTop: "1px solid #536273" }}
            buttonStyle={{ backgroundColor: "#F26531", color: "#fff", fontSize: "13px" }}
            cookieName="gatsby-gdpr-google-analytics">
            Strona wykorzystuje pliki cookies
          </CookieConsent>
        </Box>
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
