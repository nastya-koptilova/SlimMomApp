import { Logo } from 'components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { useSelector } from 'react-redux';
import s from '../Layout/Layout.module.scss';
import { Navigation } from 'components/Navigation/Navigation';
import { LoggedInNavigation } from 'components/LoggedInNavigation/LoggedInNavigation';

export function Layout() {
  //   const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const user = useSelector(state => state.auth.user);

  return (
    <>
      <header className={s.header}>
        <div>
          <Logo />
        </div>
        <nav className={s.decoration}>
          <ul className={s.navigation__list}>
            {!isLoggedIn ? (
              <>
                <Navigation />
              </>
            ) : (
              <>
                <LoggedInNavigation />
              </>
            )}
          </ul>
        </nav>
      </header>
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
}
