import AuthorizationForm from 'components/AuthorizationForm/AuthorizationForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { registerNewUser } from 'redux/authorization/authOperations';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleRegister = userData => {
    dispatch(registerNewUser(userData));
  };
  return ( <>
    {!isLoggedIn && (
      <AuthorizationForm onSubmit={handleRegister} />
    )}
    {isLoggedIn && <Navigate to="/" />}
  </>);
};

export default RegistrationPage;
