import { Logo } from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import s from '../Layout/Layout.module.scss';

export function Layout() {
  return (
    <div className={s.header}>
      <div>
        <Logo />
      </div>
      <div className={s.decoration}> </div>
      <div className={s.navigation__list}>
        <div className={s.navigation__item}>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? s.active : s.default)}
          >
            Вхід
          </NavLink>
        </div>
        <div className={s.navigation__item}>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? s.active : s.default)}
          >
            Реєстрація
          </NavLink>
        </div>
      </div>
    </div>
  );
}
