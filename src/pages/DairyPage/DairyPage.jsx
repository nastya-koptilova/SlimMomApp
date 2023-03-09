import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { SideBar } from 'components/SideBar/SideBar';
import s from './DairyPage.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from 'redux/products/selectors';
import { getProductsByDate } from 'redux/products/operations';
import { DiaryProductsList } from 'components/DiaryProductList/DiaryProductList';
import { SelectDate } from 'redux/diary/diarySelectors';
import { getInfoOper } from 'redux/diary/diaryOperation';

export function DairyPage() {
  const date = useSelector(SelectDate);
  const dispatch = useDispatch();
  // const date = useSelector(selectDate);


  useEffect(() => {
    if (date)  dispatch(getInfoOper(date));
  }, [date, dispatch]);

  return (
   <>
    <DiaryAddProductForm />
    <DiaryProductsList/></>
  );
}
