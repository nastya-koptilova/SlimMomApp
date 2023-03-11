import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductOper,
  getInfoOper,
  getUserInfo,
} from 'redux/diary/diaryOperation';
import { SelectDate } from 'redux/diary/diarySelectors';
// import { getDayInfo } from 'services/api';
import s from 'components/DiaryProductListItem/DiaryProductListItem.module.scss';
import { GoX } from 'react-icons/go';
const DiaryProductListItem = ({
  dayId,
  title,
  kcal,
  weight,
  eatenProductId,
  deleteProduct,
  id,
}) => {
  const dispatch = useDispatch();
  const date = useSelector(SelectDate);

  return (
    <div>
      <li className={s.Item}>
        <span className={s.Title}>{title}</span>
        <span className={s.Weight}>{weight} </span>
        <span className={s.Calories}>{Math.floor(kcal)}</span>
        <button
          className={s.Button}
          id={id}
          type="button"
          onClick={deleteProduct}
        >
          <GoX className={s.iconDelete} />
        </button>
      </li>
    </div>
  );
};
export default DiaryProductListItem;
