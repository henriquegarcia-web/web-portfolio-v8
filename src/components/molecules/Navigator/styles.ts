import styled from 'styled-components'

export const Navigator = styled.nav`
  position: relative;

  display: flex;
  align-items: center;

  width: fit-content;
  height: 100%;
`

export const ActiveIndicator = styled.div`
  position: absolute;
  bottom: 0;

  height: 2px;

  border-radius: 999px;

  background: ${({ theme }) => theme.colors.brand.accent};

  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  will-change: transform, width;

  pointer-events: none;
`
