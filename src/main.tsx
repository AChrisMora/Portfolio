import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import AboutMe from './pages/AboutMe.tsx';
import ContactMe from './pages/ContactMe.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Resume from './pages/Resume.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/ContactMe',
        element: <ContactMe />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
