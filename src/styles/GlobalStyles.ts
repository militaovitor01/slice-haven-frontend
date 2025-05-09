import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.backgroundLight};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${({ theme }) => theme.fonts.headline};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    line-height: 1.2;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: ${({ theme }) => theme.fonts.headline};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }
`;