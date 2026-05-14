import { createGlobalStyle, css } from 'styled-components'
import { createCssVariables } from './createCssVariables'

const rootVariables = css`
  :root {
    ${({ theme }) =>
      createCssVariables(theme as unknown as Record<string, unknown>)};
  }
`

export const GlobalStyles = createGlobalStyle`
  ${rootVariables}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    font-size: 16px;
    scroll-behavior: smooth;
    scroll-padding-top: ${({ theme }) => theme.sizes.header.desktop};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      scroll-padding-top: ${({ theme }) => theme.sizes.header.mobile};
    }
  }

  body {
    margin: 0;
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
    background-color: var(--colors-background-canvas);
    color: var(--colors-text-primary);
    font-family: var(--typography-families-body);
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  #root {
    width: 100%;
    max-width: 100%;
    min-height: 100dvh;
    overflow-x: clip;
  }

  @supports not (overflow: clip) {
    html,
    body,
    #root {
      overflow-x: hidden;
    }
  }

  img,
  picture,
  svg,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.neutral.soft};
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
