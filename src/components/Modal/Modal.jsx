import scss from './Modal.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Btn } from 'components/Btn/Btn';
import { createPortal } from 'react-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';
import {useEffect} from 'react';
import { selectLoader, selectUserInfo } from 'redux/dailyCalories/caloriesSelectors';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({onClose}) => {
    // const dailyRate = useSelector(selectUserInfo)
//    const notAllowedProducts =  useSelector(selectUserProducts)
    //   const {dailyRate, notAllowedProducts} = useSelector(selectUserInfo);
      const isLoading = useSelector(selectLoader);   
    const {userData} = useSelector(state => state.dailyCalories.user);

  console.log(userData);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      };
    
      useEffect(() => {
    
        const onModalClose = event => {
          if (event.code === 'Enter') {
            onClose();
          }
        };
        
        window.addEventListener('keydown', onModalClose);
    
        return () => {
          window.removeEventListener('keydown', onModalClose);
        };
      }, [onClose]);
    
  const location = useLocation();

  const handleBtnClick = () => {
    console.log('btnClick');
  };



  return createPortal(
    <>
    {isLoading === 'pending' && <Loader/>}
      <div className={scss.overlay} onClick={handleBackdropClick}>
        <Link to={location.state?.from || location}>
          <BsArrowReturnLeft className={scss.icon} />
        </Link>
        <div className={scss.modal}>
          <h2 className={scss.title}>Ваші рекомендованні денні калорії</h2>
          <div className={scss.caloriesContainer}>
            <span className={scss.calories}>{userData.dailyRate && Math.floor(userData.dailyRate)} <span className={scss.caloriesText}>ккал</span></span>
          </div>
          <h2>Список продуктів, які вам заборонені</h2>
          <ol>            
            {userData.notAllowedProducts?.length > 0 && userData.notAllowedProducts.map(item => (<li>{item}</li>))}
          </ol>

         <Link to='/register'><Btn className={scss.btn}onBtnClick={handleBtnClick} type="button" variant="start">
            Почніть худнути
          </Btn></Link> 
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
