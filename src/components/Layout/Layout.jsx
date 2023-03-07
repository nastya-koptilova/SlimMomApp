import { Logo } from 'components/Logo/Logo';
import { NavLink, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import s from '../Layout/Layout.module.scss';

export function Layout() {
  //   const dispatch = useDispatch();
  //   const isLoggedIn = useSelector(state => state.isLoggedIn);
  //   const user = useSelector(state => state.auth.user);

  return (
    <>
      <header className={s.header}>
        <div>
          <Logo />
        </div>
        <nav className={s.decoration}>
          <ul className={s.navigation__list}>
            <li className={s.navigation__item}>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? s.active : s.default)}
              >
                Вхід
              </NavLink>
            </li>

            <li className={s.navigation__item}>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? s.active : s.default)}
              >
                Реєстрація
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
}
