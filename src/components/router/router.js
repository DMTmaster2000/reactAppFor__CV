import About from '../../pages/About';
import Login from '../../pages/Login';
import Post from '../../pages/Post';
import PostIdPage from '../../pages/PostIdPage';

export const privateRoutes = [
  {
    path: '/about',
    element: <About />,
    exact: true,
  },
  {
    path: '/post',
    element: <Post />,
    exact: true,
  },
  {
    path: '/post/:id',
    element: <PostIdPage />,
    exact: true,
  },
  {
    path: '*',
    element: <About />,
    exact: true,
  },
];

export const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '*', element: <Login /> },
];
