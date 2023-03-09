import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from '../../hooks/useAuth';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectStatus } from "redux/authorization/authSelectors";

export const PublicRoute = ({ redirectTo = '/calculator' }) => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ?  <Navigate to={redirectTo}/> : <Suspense><Outlet/></Suspense> ;
}; 