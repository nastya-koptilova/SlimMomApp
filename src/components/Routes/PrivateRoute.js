import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/authorization/authSelectors';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

export const PrivateRoute = () => {
  const token = useSelector(selectToken)

  return token ? (
    <Suspense>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to='/register' />
  );
};