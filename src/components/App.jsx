import HomePage from 'pages/MainPage/MainPage';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthorizationForm from './AuthorizationForm/AuthorizationForm';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<AuthorizationForm />} />
            <Route path="login" element={<AuthorizationForm />} />
            {/* <Route path="contacts" element={<DairyPage />} />
        <Route path="contacts" element={<CalculatorPage />} /> */}
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
