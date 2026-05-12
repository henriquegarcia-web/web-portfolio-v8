import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  width: fit-content;
`

export const Trigger = styled.button`
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 16px;

  background: #f3f3f3;
  cursor: pointer;

  transition: background 0.2s ease;

  &:hover {
    background: #ebebeb;
  }
`

export const Arrow = styled(motion.span)`
  font-size: 0.75rem;
  color: #666;
`

export const Dropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.75rem);
  left: 0;

  width: 56px;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background: #f3f3f3;

  border-radius: 18px;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 2px 10px rgba(0, 0, 0, 0.04);

  overflow: hidden;
`

export const Item = styled(motion.button)`
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 12px;

  background: #ffffff;
  cursor: pointer;

  transition: background 0.2s ease;

  &:hover {
    background: #f7f7f7;
  }
`

export const Flag = styled.img`
  width: 24px;
  height: 24px;

  object-fit: cover;
  border-radius: 999px;
`
