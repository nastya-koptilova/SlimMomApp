import { Logo } from 'components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { useSelector } from 'react-redux';
import s from '../Layout/Layout.module.scss';
import { Navigation } from 'components/Navigation/Navigation';
import { LoggedInNavigation } from 'components/LoggedInNavigation/LoggedInNavigation';
import Burger from './Burger/Burger';
import { useWindowSize } from 'react-use';
import UserInfo from 'components/UserInfo/UserInfo';

export function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { width } = useWindowSize();

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
                <UserInfo />
                {/* {isLoggedIn && width < 1280 && <Burger />} */}
                {width < 1279 ? <Burger /> : <LoggedInNavigation /> }
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
