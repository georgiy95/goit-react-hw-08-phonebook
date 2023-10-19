import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/contactsSlice';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirecr = !isLoggedIn && !isRefreshing;

  return shouldRedirecr ? <Navigate to={redirectTo} /> : <Component />;
};
