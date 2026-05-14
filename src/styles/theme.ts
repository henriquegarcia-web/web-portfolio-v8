import { tokens } from './tokens'

export const appTheme = {
  ...tokens,
} as const

export type AppTheme = typeof appTheme
