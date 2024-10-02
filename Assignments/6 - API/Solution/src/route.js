import Home from 'pages/Home';
import Restaurant from 'pages/Restaurant';
import Login from 'pages/Login';
import Customer from 'pages/Customer';
import Error from 'pages/Error';
import ProtectedRoute from 'components/ProtectedRoute';
import ProtectedAuth from 'components/ProtectedAuth';

const routeArray = [
  {
    path: '/',
    element: <ProtectedRoute><Home /></ProtectedRoute>,
    errorElement: <Error />,
  },
  {
    path: '/restaurants/:id',
    element: <ProtectedRoute><Restaurant /></ProtectedRoute>,
  },
  {
    path: '/login',
    element: <ProtectedAuth><Login /></ProtectedAuth>,
  },
  {
    path: "/customer",
    element: <ProtectedRoute><Customer /></ProtectedRoute>,
  },
];

export default routeArray;
