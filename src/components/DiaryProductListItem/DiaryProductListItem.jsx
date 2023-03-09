import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductOper, getInfoOper, getUserInfo } from 'redux/diary/diaryOperation';
import { SelectDate } from 'redux/diary/diarySelectors';
// import { getDayInfo } from 'services/api';

const DiaryProductListItem = ({
  dayId,
  title,
  kcal,
  weight,
  eatenProductId,
  deleteProduct,
  id
}) => {
  const dispatch = useDispatch();
  const date = useSelector(SelectDate);

  return (
    <div>
      <li>
        <span>{title}</span>
        <span>{weight} </span>
        <span>{Math.floor(kcal)}</span>
        <button id={id} type="button" onClick={deleteProduct}>
          UJCGJLB
        </button>
      </li>
    </div>
  );
};
export default DiaryProductListItem;

