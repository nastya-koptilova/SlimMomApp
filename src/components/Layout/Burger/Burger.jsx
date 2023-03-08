import React, { useState } from 'react';
import { ReactComponent as BurgerIcon } from 'images/burger/burger.svg';
import s from '../Burger/Burger.module.scss';
import { LoggedInNavigation } from 'components/LoggedInNavigation/LoggedInNavigation';

export default function Burger() {
  const [show, setShow] = useState(false);
  const onToggle = () => {
    setShow(prevState => !prevState);
  };

  return (
    <>
      <button onClick={onToggle} className={s.burger}>
        <BurgerIcon />
      </button>
      {show && <LoggedInNavigation />}
    </>
  );
}
//дописати логіку по toggle
