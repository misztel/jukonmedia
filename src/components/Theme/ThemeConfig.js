import { css } from 'styled-components';

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  fablet: '998px',
  desktop: '1200px',
  bigDesktop: '1400px'
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
    mobile: `(min-width: ${breakpoints.mobile})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    fablet: `(min-width: ${breakpoints.fablet})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
    bigDesktop: `(min-width: ${breakpoints.bigDesktop})`,
    maxMobile: `(max-width: ${breakpoints.mobile})`,
    maxTablet: `(max-width: ${breakpoints.tablet})`,
  },
};

export const darkTheme = {
  accentColor: {
    primary: '#f26531',
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
    danger: '#d84654',
    success: '#4f9d69'
  },
  ...themeConfig,
};

export const lightTheme = {
  accentColor: {
    primary: '#F26531',
    secondary: '#F9FCFF',
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
    tertiary: '#d6efff'
    //#026185
  },
  infoColor: {
    danger: '#d84654',
    success: '#4f9d69'
  },
  ...themeConfig,
};

//orabnge - f26531
