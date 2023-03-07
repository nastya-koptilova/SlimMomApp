import { DairyPage } from 'pages/DairyPage/DairyPage';
import HomePage from 'pages/MainPage/MainPage';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="register" element={<RegistrationPage />} /> */}
            <Route path="login" element={<LoginPage />} />
            {/* <Route path="contacts" element={<DairyPage />} /> */}
            {/* <Route path="contacts" element={<CalculatorPage />} /> */}
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
