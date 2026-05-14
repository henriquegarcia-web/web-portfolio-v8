import type { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/GlobalStyles'
import { appTheme } from '@/styles/theme'
import '@/translations/i18n'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
