import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductOper,
  getInfoOper,
  getUserInfo,
  productSearchOper,
} from 'redux/diary/diaryOperation';
import moment from 'moment';
import DiaryDateCalendar from '../DiaryDateCalendar/DiaryDateCalendar';
import s from './DiaryAddProductForm.module.scss';
import { BsPlusLg } from 'react-icons/bs';
import { Btn } from 'components/Btn/Btn';
import { SelectDate, SelectProductsData } from 'redux/diary/diarySelectors';
import { setDate } from 'redux/diary/diarySlice';

export const DiaryAddProductForm = props => {
  const productsList = useSelector(SelectProductsData);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const date = useSelector(SelectDate);
  const [weight, setWeight] = useState('');

  useEffect(() => {
    dispatch(getInfoOper(date));
  }, [dispatch, date]);

  const handleChangeDate = value => {
    dispatch(setDate(moment(value.$d).format('YYYY-MM-DD')));
    dispatch(getUserInfo());
  };

  const handleAddProduct = event => {
    event.preventDefault();
    const productId = productsList[0]._id;

    const data = {
      date,
      productId,
      weight,
    };
    dispatch(addProductOper(data));
    resetForm();
  };

  // useEffect(() => {
  //     dispatch(productSearchOper(title));
  // }, [dispatch, title]);

  const inputChange = e => {
    setTitle(e.currentTarget.value);
    dispatch(productSearchOper(title));
  };

  const resetForm = () => {
    // setDate(moment(new Date()).format('YYYY-MM-DD'));
    setTitle('');
    setWeight('');
  };

  return (
    <>
      <form className={s.Form} onSubmit={handleAddProduct}>
        {/* // <div className={s.fieldRow}> */}
        <DiaryDateCalendar onChange={handleChangeDate} className={s.Calendar} />

        <div className={s.fieldRow}>
          <div className={s.FieldProduct}>
            <input
              list="productsList"
              className={s.Input}
              type="text"
              value={title}
              onChange={inputChange}
              name="title"
              required
            />
            <datalist id="productsList">
              {productsList?.length > 0 &&
                productsList.map(item => (
                  <option key={item._id} value={item.title.ua} id={item._id} />
                ))}
            </datalist>
            <label className={s.LabelTitle} htmlFor="title">
              Введіть назву продукту
            </label>
          </div>

          <div className={s.FieldWeight}>
            <input
              className={s.Input}
              id="weight"
              type="number"
              value={weight}
              onChange={e => setWeight(Number(e.currentTarget.value))}
              name="weight"
              pattern="^[0-9]*$"
              required
            />
            <label className={s.LabelWeight} htmlFor="weight">
              Грами
            </label>
          </div>

          <Btn type="submit" variant="plus">
            <BsPlusLg className={s.icon} />
          </Btn>
        </div>
      </form>
    </>
  );
};
