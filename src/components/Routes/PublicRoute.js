import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectToken,
} from 'redux/authorization/authSelectors';

export const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  return token && isLoggedIn ? (
    <Navigate to="/diary" />
  ) : (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};