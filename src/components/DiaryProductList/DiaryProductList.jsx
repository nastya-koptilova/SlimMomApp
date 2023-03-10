import React from 'react';
import DiaryProductsListItem from '../DiaryProductListItem/DiaryProductListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  SelectDate,
  SelectDayData,
  SelectUserData,
} from 'redux/diary/diarySelectors';
import { deleteProductOper, getInfoOper } from 'redux/diary/diaryOperation';
import { selectUserName } from 'redux/authorization/authSelectors';

export function DiaryProductsList() {
  const eatenProducts = useSelector(state => state.searchData.eatenProducts);
  const dayId = useSelector(state => state.searchData.dayId);
  const date = useSelector(SelectDate);
  const dispatch = useDispatch();
  const array = eatenProducts;
  // нотіфкатіон коли арей 0 ! !!!!!!!!!!!!!!!!!!!!!!!

  const deleteProduct = e => {
    const dayIdObj = {
      dayId: dayId,
      eatenProductId: e.target.id,
    };
    dispatch(deleteProductOper(dayIdObj))
      .unwrap()
      .then(() => {
        dispatch(getInfoOper(date));
      });
  };
  return (
    <div>
      <ul>
        {array?.length > 0 ? (
          array.map(item => (
            <DiaryProductsListItem
              key={item.id}
              id={item.id}
              weight={item.weight}
              kcal={item.kcal}
              title={item.title}
              eatenProductId={item.id}
              dayId={dayId}
              deleteProduct={deleteProduct}
            />
          ))
        ) : (
          <p>Why dont you eat</p>
        )}
      </ul>
    </div>
  );
}
