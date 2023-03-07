
import { DairyPage } from 'pages/DairyPage/DairyPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import HomePage from 'pages/MainPage/MainPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <> 
     <Suspense fallback={<div>Loading</div>}>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />}/>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dairy" element={<DairyPage />} />
        <Route path="calculator" element={<CalculatorPage />} /> */}
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Suspense>
    </>
  );
};
