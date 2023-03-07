import scss from './Modal.module.scss';
// import {ReactComponent as GoBackArrow} from '../../images/goBackIcon/GoBackArrow.svg';
import { Link, useLocation } from 'react-router-dom';
import { Btn } from 'components/Btn/Btn';
import { createPortal } from 'react-dom';
import {BsArrowReturnLeft} from 'react-icons/bs';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
    const location = useLocation();

    const handleBtnClick = () => {
        console.log('btnClick')
    }
    
    return createPortal(          
        <>
             <div className={scss.overlay}>
             <Link to={location.state?.from || location}><BsArrowReturnLeft className={scss.icon}/></Link>
            <div className={scss.modal}>
                <h2 className={scss.title}>Ваші рекомендованні денні калорії</h2>
           <Btn onBtnClick={handleBtnClick} type='button'>Почніть худнути</Btn>
            </div>
            </div>   
        </>,
        modalRoot
    )
}

export default Modal;