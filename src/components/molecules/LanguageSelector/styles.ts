import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const secondaryButtonStyle = css`
  color: ${({ theme }) => theme.colors.neutral.white};
  background: rgba(2, 6, 23, 0.45);

  border: 1px solid ${({ theme }) => theme.colors.border.subtle};

  box-shadow:
    0 0 18px rgba(91, 93, 240, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;

    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(139, 92, 246, 0.08) 30%,
        rgba(139, 92, 246, 0.75) 50%,
        rgba(139, 92, 246, 0.08) 70%,
        transparent 100%
      )
      border-box;

    mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);

    mask-composite: exclude;
    border: 1px solid transparent;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 20%;
    pointer-events: none;
    border-radius: inherit;

    opacity: 0.22;
    background: ${({ theme }) => theme.colors.brand.accent};
    filter: blur(12px);
  }
`

export const Container = styled.div`
  position: relative;
  width: fit-content;
`

export const Trigger = styled.button`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  width: 70px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};

  cursor: pointer;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    box-shadow 0.2s ease;

  ${secondaryButtonStyle}

  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);

    &::after {
      opacity: 0.45;
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
  }
`

export const Arrow = styled(motion.span)`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  color: inherit;

  svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
`

export const Dropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;
  z-index: 20;

  width: 70px;
  padding: ${({ theme }) => theme.spacing[2]};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-radius: ${({ theme }) => theme.radii.sm};

  ${secondaryButtonStyle}

  overflow: hidden;
`

export const Item = styled(motion.button)`
  position: relative;
  z-index: 1;

  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};

  color: inherit;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`

export const Flag = styled.img`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 24px;

  object-fit: contain;
`
