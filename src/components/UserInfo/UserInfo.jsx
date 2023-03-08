import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'redux/authorization/authOperations';
import { selectUserName } from 'redux/authorization/authSelectors';
import s from '../UserInfo/UserInfo.module.scss';

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  const handleChange = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className={s.navigation__list}>
      <div className={s.decoration}>
        <p className={s.name}>{user}</p>
      </div>
      <div>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.active : s.default)}
          onClick={handleChange}
        >
          Вихід
        </NavLink>
      </div>
    </nav>
  );
};

export default UserInfo;
