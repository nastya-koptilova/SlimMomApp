import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';

export const PublicRoute = ({ redirectTo = '/calculator' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};
