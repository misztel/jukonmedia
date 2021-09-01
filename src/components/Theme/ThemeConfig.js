import { css } from 'styled-components';

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  fablet: '998px',
  desktop: '1200px',
};

const themeConfig = {
  fontFamily: '"Montserrat", sans-serif',
  secondaryFontFamily: '',
  shadow: '',
  spacing: {
    sectionMargins: css`
      margin-top: 100px;
      margin-bottom: 100px;
    `,
  },
  button: {
    round: '5px',
    padding: '12px 24px',
    margin: '30px 0px',
    fontWeight: '600',
    fontSize: '14px',
  },
  media: {
    mobile: `(max-width: ${breakpoints.mobile})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    fablet: `(max-width: ${breakpoints.fablet})`,
    desktop: `(max-width: ${breakpoints.desktop})`,
    minMobile: `(min-width: ${breakpoints.mobile})`,
    minTablet: `(min-width: ${breakpoints.tablet})`,
  },
};

export const darkTheme = {
  accentColor: {
    primary: '#00FFAA',
    secondary: '#00BBFF',
    tertiary: '#4579F5',
  },
  neutralColor: {
    white: '#fff',
    textPrimary: '#E0E0FF',
    textSecondary: '#202036',
    shadow: '#1B0A52'
  },
  backgroundColor: {
    primary: '#27273E',
    secondary: '#202036',
    tertiary: '#33334B'
  },
  infoColor: {
    danger: '#e63946'
  },
  ...themeConfig,
};

export const lightTheme = {
  accentColor: {
    primary: '#00FFAA',
    secondary: '#00BBFF',
    tertiary: '#4579F5',
  },
  neutralColor: {
    white: '#fff',
    textPrimary: '#536273',
    textSecondary: '#F9FCFF',
    shadow: '#1B0A52'
  },
  backgroundColor: {
    primary: '#F9FCFF',
    secondary: '#C0CBD7',
    tertiary: '#536273'
  },
  infoColor: {
    danger: '#e63946'
  },
  ...themeConfig,
};
