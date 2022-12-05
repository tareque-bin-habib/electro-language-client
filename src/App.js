import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Faq from './components/Faq/Faq';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';

import Register from './components/Register/Register';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoutes from './routes/PrivateRoutes';
import Error from './components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          loader: () => fetch('https://electro-language-server.vercel.app/products'),
          element: <Courses></Courses>
        },
        {
          path: '/courseDetails/:id',
          loader: ({ params }) => fetch(`https://electro-language-server.vercel.app/products/${params.id}`),
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/checkout/:id',
          loader: ({ params }) => fetch(`https://electro-language-server.vercel.app/products/${params.id}`),
          element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ],

    },

  ])


  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
