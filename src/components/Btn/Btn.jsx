import scss from './Btn.module.scss';

export const Btn = ({ children, onBtnClick, type = 'submit' }) => {
  return (
    <button className={scss.plus} type={type} onClick={onBtnClick}>
      {children}
    </button>
  );
};
