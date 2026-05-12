import type { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { appTheme } from '@/styles/theme';
import { queryClient } from '@/services/query/queryClient';
import '@/translations/i18n';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={appTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
