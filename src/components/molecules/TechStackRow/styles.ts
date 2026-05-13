import styled from 'styled-components'

export const TechStackRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`

export const TechStackWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};

  svg {
    width: 30px !important;
    height: 30px !important;
    filter: grayscale(80);
  }
`
