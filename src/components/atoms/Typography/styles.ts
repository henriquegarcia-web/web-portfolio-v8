import styled, { css } from 'styled-components'

import type { TypographyVariant } from '.'

interface ITypographyStyleProps {
  $variant: TypographyVariant
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
    font-size: ${({ theme }) => theme.typography.fontSizes['xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.normal};
  `,

  text: css`
    font-family: ${({ theme }) => theme.typography.families.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
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
    font-family: ${({ theme }) => theme.typography.families.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacings.wide};
    text-transform: uppercase;
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
}

export const Typography = styled.p<ITypographyStyleProps>`
  margin: 0;
  padding: 0;
  color: inherit;

  ${({ $variant }) => variants[$variant]}
`
