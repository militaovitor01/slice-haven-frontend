import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      accent: string;
      success: string;
      warning: string;
      error: string;
      textPrimary: string;
      textSecondary: string;
      textLight: string;
      background: string;
      backgroundLight: string;
      backgroundDark: string;
    };
    fonts: {
      headline: string;
      body: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
} 