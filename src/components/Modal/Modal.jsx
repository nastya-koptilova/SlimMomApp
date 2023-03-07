import scss from './Modal.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Btn } from 'components/Btn/Btn';
import { createPortal } from 'react-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useEffect } from 'react';
import {
  selectError,
  selectLoader,
  selectUserInfo,
} from 'redux/dailyCalories/caloriesSelectors';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  const user = useSelector(selectUserInfo);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoader);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onModalClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onModalClose);

    return () => {
      window.removeEventListener('keydown', onModalClose);
    };
  }, [onClose]);

//   const location = useLocation();

  const handleBtnClick = () => {
    console.log('btnClick');
  };

  return createPortal(
    <>
      <div className={scss.overlay} onClick={handleBackdropClick}>
        <button type='button' onClick={()=>onClose()}>
          <BsArrowReturnLeft className={scss.icon} />
        </button>
        {error && <p> Oops, some error occured... Message: {error}</p>}
        {isLoading === 'pending' ? (
          <Loader />
        ) : (
          <div className={scss.modal}>
            <h2 className={scss.title}>Ваші рекомендованні денні калорії</h2>
            <div className={scss.caloriesContainer}>
              <span className={scss.calories}>
                {user?.dailyRate && Math.floor(user.dailyRate)}
                <span className={scss.caloriesText}>ккал</span>
              </span>
            </div>
            <h2 className={scss.secondaryTitle}>
              Список продуктів, які вам заборонені
            </h2>
            <ol className={scss.list}>
              {user?.notAllowedProducts.length > 0 &&
                user.notAllowedProducts
                  .slice(0, 4)
                  .map(item => <li className={scss.listItem} key={item}>{item}</li>)}
            </ol>
            <Link  className={scss.btn} to="/register">
              <Btn
                onBtnClick={handleBtnClick}
                type="button"
                variant="start"
              >
                Почніть худнути
              </Btn>
            </Link>
          </div>
        )}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
