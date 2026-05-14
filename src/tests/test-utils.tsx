import type { PropsWithChildren, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/GlobalStyles'
import { appTheme } from '@/styles/theme'
import i18n from '@/translations/i18n'

function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={appTheme}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyles />
        {children}
      </I18nextProvider>
    </ThemeProvider>
  )
}

export function renderWithProviders(ui: ReactElement) {
  return render(ui, { wrapper: Providers })
}
