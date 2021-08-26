import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../../hooks/useDarkTheme';
import { lightTheme, darkTheme } from '../Theme/ThemeConfig';
import { GlobalStyles } from '../../styles/GlobalStyles';

import NavDesktop from './Navbar/NavDesktop';
import NavMobile from './Navbar/NavMobile';
import Container from '../Basic/Container';

import ThemeContext from '../Theme/ThemeContext';

const NavHeader = styled.div`
  display: flex;
  width: 100%;
`;

const Layout = ({ children }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <NavHeader>
          <Container>
            <ThemeContext.Provider
              value={{ theme, themeToggler, mountedComponent }}
            >
              <NavDesktop />
              <NavMobile />
            </ThemeContext.Provider>
          </Container>
        </NavHeader>

        <Container>{children}</Container>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
