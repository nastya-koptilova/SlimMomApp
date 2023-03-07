import AuthorizationForm from 'components/AuthorizationForm/AuthorizationForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { loginUser } from 'redux/authorization/authOperations';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogin = userData => {
    dispatch(loginUser(userData));
  };

  return (<>
    {!isLoggedIn && (
      <AuthorizationForm isRegisterForm={false} onSubmit={handleLogin} />
    )}
    {isLoggedIn && <Navigate to="/dairy" />}
  </>)
};

export default LoginPage;
