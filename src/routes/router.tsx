import { createBrowserRouter } from 'react-router-dom'

import { LandingPage } from '@/pages'

import { APP_ROUTES } from '@/constants/routes'

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.home,
    element: <LandingPage />,
  },
])
