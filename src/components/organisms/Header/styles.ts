import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.sizes.header.desktop};
  background-color: ${({ theme }) => theme.colors.neutral.darkest};
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container.lg};
  height: 100%;
`

export const HeaderCtas = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-left: auto;
`
