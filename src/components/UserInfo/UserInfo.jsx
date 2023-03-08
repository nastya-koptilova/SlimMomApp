import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'redux/authorization/authOperations';
import { selectUserName } from 'redux/authorization/authSelectors';
import s from '../Layout/Layout.module.scss';

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  const handleChange = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className={s.navigation__list}>
      <p className={s.active}>{user}</p>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.active : s.default)}
        onClick={handleChange}
      >
        Вихід
      </NavLink>
    </nav>
  );
};

export default UserInfo;
