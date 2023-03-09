import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { PrivateRoute } from './components/Routes/PrivateRoute';
// import { PublicRoute } from './components/Routes/PublicRoute';
import { getUserInfo, refreshUser } from 'redux/authorization/authOperations';

import LoginPage from 'pages/LoginPage/LoginPage';
import HomePage from 'pages/MainPage/MainPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { DairyPage } from 'pages/DairyPage/DairyPage';
import { DiaryAddProductForm } from './DiaryAddProductForm/DiaryAddProductForm';
import { CalculatorPage } from 'pages/CalculatorPage/CalculatorPage';
import { SidePage } from 'pages/SidePage/SidePage';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';

// const DairyPage = lazy(() => import('pages/DairyPage/DairyPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  useEffect(() => {
    if (isLoggedIn) dispatch(getUserInfo());
  }, [dispatch, isLoggedIn]);
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<SidePage />}>
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/diary" element={<DairyPage />} />
              </Route>
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
