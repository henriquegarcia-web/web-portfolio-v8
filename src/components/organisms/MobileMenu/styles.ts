import styled from 'styled-components'
import { motion, AnimatePresence as FramerAnimatePresence } from 'framer-motion'

export const AnimatePresence = FramerAnimatePresence

export const MobileMenu = styled.nav`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`

export const ToggleWrapper = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 90;

  background: rgba(2, 6, 23, 0.72);

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`

export const Sidebar = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;

  width: min(86vw, 360px);
  height: 100dvh;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.background.canvas};

  border-left: 1px solid ${({ theme }) => theme.colors.border.subtle};

  box-shadow:
    -20px 0 60px rgba(2, 6, 23, 0.72),
    inset 1px 0 0 rgba(255, 255, 255, 0.04);

  overflow: hidden;
`

export const Header = styled.div`
  min-height: 72px;
  padding: 1rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
`

export const Content = styled.div`
  flex: 1;
  padding: 1.25rem;

  overflow-y: auto;
  overscroll-behavior: contain;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.strong};
    border-radius: 999px;
  }
`

export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  list-style: none;
`

export const NavigationItem = styled.li`
  width: 100%;
`

export const NavigationLink = styled.a`
  width: 100%;
  min-height: 48px;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  text-decoration: none;

  color: ${({ theme }) => theme.colors.neutral.light};
  background: rgba(255, 255, 255, 0.03);

  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: 12px;

  transition:
    color 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.soft};
    background: rgba(255, 255, 255, 0.06);
    border-color: ${({ theme }) => theme.colors.border.accent};
    transform: translateX(-2px);
  }
`
