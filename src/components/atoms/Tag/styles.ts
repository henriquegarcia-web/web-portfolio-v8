import styled, { css } from 'styled-components'
import type { TagVariantTypes } from '@/types/styles'

export interface ITag {
  $variant: TagVariantTypes
}

const variants = {
  default: css`
    p {
      color: ${({ theme }) => theme.colors.neutral.light};
      font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
    }

    height: 30px;
    padding-inline: ${({ theme }) => theme.spacing[3]};

    border-radius: ${({ theme }) => theme.radii.xs};
    background-color: ${({ theme }) => theme.colors.neutral.strong};
    border: 1px solid ${({ theme }) => theme.colors.border.strong};
  `,
  tech: css`
    height: 20px;
    padding: 0 ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[1]};

    border-radius: ${({ theme }) => theme.radii.pill};
    background-color: ${({ theme }) => theme.colors.tag.accent};
    border: 1px solid ${({ theme }) => theme.colors.brand.accent};
  `,
}

export const Tag = styled.span<ITag>`
  ${({ $variant }) => variants[$variant]}

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: fit-content;
`

export const SectionTagDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: ${({ theme }) => theme.radii.round};
  background-color: ${({ theme }) => theme.colors.brand.accent};
`
