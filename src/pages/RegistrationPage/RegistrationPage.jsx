import AuthorizationForm from 'components/AuthorizationForm/AuthorizationForm';
import { useDispatch } from 'react-redux';
import { registerNewUser } from 'redux/authorization/authOperations';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleRegister = userData => {
    dispatch(registerNewUser(userData));
  };
  return <AuthorizationForm onSubmit={handleRegister} />;
};

export default RegistrationPage;
