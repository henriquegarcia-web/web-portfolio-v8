import { createBrowserRouter } from 'react-router-dom';
import { APP_ROUTES } from '@/constants/routes';
import { HomePage } from '@/pages/home/HomePage';

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.home,
    element: <HomePage />,
  },
]);
