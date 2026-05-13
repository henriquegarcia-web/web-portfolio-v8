import styled from 'styled-components'

export const SectionTag = styled.span`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radii.pill};
  background-color: ${({ theme }) => theme.colors.tag.accent};
  border: 1px solid ${({ theme }) => theme.colors.brand.accent};
`

export const SectionTagDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: ${({ theme }) => theme.radii.round};
  background-color: ${({ theme }) => theme.colors.brand.accent};
`
