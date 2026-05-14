import styled from 'styled-components'

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
`

export const SectionHeaderCta = styled.div`
  margin-top: ${({ theme }) => theme.spacing[2]};
`
