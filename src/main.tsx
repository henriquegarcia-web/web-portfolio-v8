import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProviders } from '@/AppProviders'
import { LandingPage } from '@/pages'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <LandingPage />
    </AppProviders>
  </React.StrictMode>,
)
