import styled, { css } from 'styled-components'

import type { TypographyVariant } from '.'

interface ITypographyStyleProps {
  $variant: TypographyVariant
  $active?: boolean
  $uppercase?: boolean
}

const variants = {
  'hero-title': css`
    font-family: ${({ theme }) => theme.typography.families.heading};
    font-size: ${({ theme }) => theme.typography.fontSizes['6xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    line-height: ${({ theme }) => theme.typography.lineHeights.tight};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.tighter};
  `,

  title: css`
    font-family: ${({ theme }) => theme.typography.families.heading};
    font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    line-height: ${({ theme }) => theme.typography.lineHeights.snug};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.tight};
  `,

  subtitle: css`
    font-family: ${({ theme }) => theme.typography.families.heading};
    font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.normal};
  `,

  label: css`
    font-family: ${({ theme }) => theme.typography.families.heading};
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.wide};

    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.brand.soft};

    background: ${({ theme }) => theme.colors.brand.fade};
    background-clip: text;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
  `,

  text: css`
    font-family: ${({ theme }) => theme.typography.families.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
    line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.normal};
  `,

  caption: css`
    font-family: ${({ theme }) => theme.typography.families.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.wide};
    opacity: 0.8;
  `,

  button: css`
    position: relative;
    z-index: 1;

    font-family: ${({ theme }) => theme.typography.families.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    line-height: 1;
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.wide};
    text-transform: uppercase;
    text-decoration: none;

    color: inherit;
  `,

  link: css`
    font-family: ${({ theme }) => theme.typography.families.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.normal};

    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  `,

  nav: css<ITypographyStyleProps>`
    font-family: ${({ theme }) => theme.typography.families.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.wide};

    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.25s ease;

    color: ${({ theme, $active }) =>
      $active ? theme.colors.neutral.soft : theme.colors.neutral.light};

    &:hover {
      color: ${({ theme }) => theme.colors.neutral.soft};
    }
  `,
}

export const Highlight = styled.span`
  background: ${({ theme }) => theme.colors.brand.fade};
  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: transparent;
`

export const Typography = styled.p<ITypographyStyleProps>`
  margin: 0;
  padding: 0;
  color: inherit;

  ${({ $variant }) => variants[$variant]}
  ${({ $uppercase }) =>
    $uppercase &&
    css`
      text-transform: uppercase;
    `}
`
