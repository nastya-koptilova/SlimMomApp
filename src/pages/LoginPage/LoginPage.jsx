import AuthorizationForm from 'components/AuthorizationForm/AuthorizationForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authorization/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = userData => {
    dispatch(loginUser(userData));
  };

  return <AuthorizationForm isRegisterForm={false} onSubmit={handleLogin} />;
};

export default LoginPage;
