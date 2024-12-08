import { createBrowserRouter } from 'react-router-dom';
import Country from './pages/Country';
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
        {
          path: ':country',
          element: <Country />,
        },
      ],
    },
  ],
  { basename: '/rest-countries-api-with-color-theme-switcher/' }
);

export default router;
