import { createBrowserRouter } from 'react-router-dom';
import Default from './pages/Default';
import Home from './pages/Home';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Default />,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
  ],
  { basename: '/rest-countries-api-with-color-theme-switcher/' }
);

export default router;
