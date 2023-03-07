import scss from './Btn.module.scss';

export const Btn = ({ children, onBtnClick, type = 'submit', nameOfClass}) => {
  return (
    <button className={nameOfClass} type={type} onClick={onBtnClick}>
      {children}
    </button>
  );
};
