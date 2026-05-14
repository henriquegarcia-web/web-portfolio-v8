import styled from 'styled-components'

export const Header = styled.header`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.sizes.header.desktop};
  padding-inline: ${({ theme }) => theme.spacing[4]};

  background-color: ${({ theme }) => theme.colors.overlay.strong};
  backdrop-filter: blur(6px);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: ${({ theme }) => theme.sizes.header.mobile};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-inline: ${({ theme }) => theme.spacing[3]};
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container.lg};
  height: 100%;
  gap: ${({ theme }) => theme.spacing[5]};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 1;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const HeaderCtas = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-left: auto;
`
