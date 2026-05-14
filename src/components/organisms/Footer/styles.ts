import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.neutral.dark};
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`

export const MainFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[6]};
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[10]} ${theme.spacing[4]}`};
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 12rem;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-basis: 100%;
  }
`

export const BottomFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};

  background-color: ${({ theme }) => theme.colors.neutral.darkest};

  ${FooterWrapper} {
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[1]};
    }
  }
`
