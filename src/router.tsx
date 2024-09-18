import { createBrowserRouter } from 'react-router-dom';
import Default from './pages/Default';
import Home from './pages/Home';

const router = createBrowserRouter([
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
]);

export default router;
