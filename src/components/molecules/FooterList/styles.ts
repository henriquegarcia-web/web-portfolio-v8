import styled from 'styled-components'

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const FooterListTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`
