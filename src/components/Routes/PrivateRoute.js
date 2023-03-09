import { Navigate, Outlet } from "react-router-dom";
import { selectIsLoggedIn, selectStatus } from "redux/authorization/authSelectors";
import { useAuth } from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense } from 'react';

export const PrivateRoute = ({redirectTo = '/' }) => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);
console.log(isLoggedIn);
  return isLoggedIn ? <Suspense><Outlet/></Suspense> :  <Navigate to={redirectTo}/>;
}