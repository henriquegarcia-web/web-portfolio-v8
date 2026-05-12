import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProviders } from '@/AppProviders';
import { AppRouterProvider } from '@/routes/AppRouterProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <AppRouterProvider />
    </AppProviders>
  </React.StrictMode>,
);
