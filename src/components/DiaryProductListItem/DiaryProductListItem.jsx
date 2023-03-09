import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductOper } from 'redux/diary/diaryOperation';

 const DiaryProductListItem = ({ dayId, title, kcal, weight, eatenProductId }) => {
 const dispatch = useDispatch();
 
  // const deleteItem = () => {
    // console.log(dayId,eatenProductId);
  // };

  return (
  
    <div>
      <li>
        <span>{title}</span>
        <span>{weight} </span>
        <span>{Math.floor(kcal)}</span>
        <button type='button' onClick={()=>{dispatch(deleteProductOper({dayId, eatenProductId}))}}>UJCGJLB</button>
      </li>
    </div>
  );
};
export default DiaryProductListItem;

// {()=>{dispatch(deleteProductOper({dayId, eatenProductId}))}}