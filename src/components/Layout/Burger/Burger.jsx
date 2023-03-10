import React, { useState } from 'react';
import { ReactComponent as BurgerIcon } from 'images/burger/burger.svg';
import { ReactComponent as CloseIcon } from 'images/close/close.svg';
import s from '../Burger/Burger.module.scss';
import { LoggedInNavigation } from 'components/LoggedInNavigation/LoggedInNavigation';
import Modal from 'components/ModalMobMenu/ModalMobMenu';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { useSelector } from 'react-redux';
// import { CSSTransition, Transition } from 'react-transition-group';

export default function Burger() {
  //   const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  //   const handleModalOpen = () => {
  //     setIsModalOpen(true);
  //   };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onToggle = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <button onClick={onToggle} className={s.btn}>
        {!isModalOpen ? (
          <BurgerIcon className={s.burger} />
        ) : (
          <CloseIcon className={s.close} />
        )}
      </button>
      {/* {isLoggedIn && <LoggedInNavigation />} */}
      <Modal isModalOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
}
