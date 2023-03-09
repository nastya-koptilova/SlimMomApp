import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

export const PrivateRoute = ({ redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Suspense>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
};
