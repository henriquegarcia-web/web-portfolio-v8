import styled from 'styled-components'

export const HeroDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`

export const HeroLegend = styled.div`
  margin: ${({ theme }) => theme.spacing[2]} 0;
`

export const HeroCtas = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
`
