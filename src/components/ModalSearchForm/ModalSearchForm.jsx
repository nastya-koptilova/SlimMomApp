import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import UserInfo from 'components/UserInfo/UserInfo';
import { createPortal } from 'react-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';
import scss from './ModalSearchForm.module.scss';

const modalRoot = document.querySelector('#modal-root');

export const ModalSearchForm = ({onModalClose}) => {
    return createPortal(
        <div className={scss.overlayMod}>
                <div className={scss.modal}>
                    <div className={scss.container}>
                     <BsArrowReturnLeft 
                         // style={{
    //   position: 'absolute',
    //   top: '20px',
    //   left: '20px',
    // }}
                  className={scss.icon}
                  onClick={() => onModalClose()}
                /> 
                
{/* <svg  onClick={() => onModalClose()} className={scss.icon} width="12px" height="7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12L20 12M4 12L10 6M4 12L10 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                        <UserInfo/>

                    </div >
                    <div className={scss.form}>
                    <DiaryAddProductForm/>
                    </div>
              
                </div>
        </div>,
        modalRoot
    )}