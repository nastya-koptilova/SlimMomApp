import React from 'react';
import DiaryProductsListItem from '../DiaryProductListItem/DiaryProductListItem';
import { useDispatch, useSelector } from 'react-redux';
import { SelectDayData } from 'redux/diary/diarySelectors';

export function DiaryProductsList() { 
  const data = useSelector(SelectDayData)
  console.log(data.day.eatenProducts);
  return (
    <ul>
      {/* {filter.map(({ item }) => ( */}
      <DiaryProductsListItem />
      {/* ))} */}
    </ul>
  );
}
