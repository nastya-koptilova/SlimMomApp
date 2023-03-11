import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductOper,
  getInfoOper,
  getUserInfo,
  productSearchOper,
} from 'redux/diary/diaryOperation';
import moment from 'moment';
import { useWindowSize } from 'react-use';
import DiaryDateCalendar from '../DiaryDateCalendar/DiaryDateCalendar';
import s from './DiaryAddProductForm.module.scss';
import { BsPlusLg } from 'react-icons/bs';
import { Btn } from 'components/Btn/Btn';
import { SelectDate, SelectProductsData } from 'redux/diary/diarySelectors';
import { setDate } from 'redux/diary/diarySlice';
import { selectIsRefresh } from 'redux/authorization/authSelectors';

export const DiaryAddProductForm = props => {
  const productsList = useSelector(SelectProductsData);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const date = useSelector(SelectDate);
  const [weight, setWeight] = useState('');
  const isRefresh = useSelector(selectIsRefresh);
  const { width } = useWindowSize();

  // useEffect(() => {
  //   isRefresh && dispatch(getInfoOper(date));
  // }, [dispatch, date, isRefresh]);

  useEffect(() => {
    dispatch(getInfoOper(date));
  }, [dispatch, date]);

  const handleChangeDate = value => {
    dispatch(setDate(moment(value.$d).format('YYYY-MM-DD')));
    dispatch(getUserInfo());
  };

  const handleAddProduct = event => {
    event.preventDefault();
    const productId = productsList.find(item => item.title.ua === title)._id;

    const data = {
      date,
      productId,
      weight,
    };
    dispatch(addProductOper(data));
    resetForm();
  };

  // const debounceDispatch = useCallback(
  //   debounce((title)=>{if(!title) return;
  //    dispatch(productSearchOper(title))}, 500),
  //    [],
  //  )

  //    const inputChange = e => {
  //      setTitle(e.currentTarget.value);
  //      debounceDispatch(title);
  //    };

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
        {width > 768 ? (
          <DiaryDateCalendar
            onChange={handleChangeDate}
            className={s.Calendar}
          />
        ) : (
          ''
        )}
        <div className={s.fieldRow}>
          <div className={s.FieldProduct}>
            <input
              placeholder="  Введіть назву продукту"
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
          </div>

          <div className={s.FieldWeight}>
            <input
              placeholder="  Грами"
              className={s.Input}
              id="weight"
              type="number"
              value={weight}
              onChange={e => setWeight(Number(e.currentTarget.value))}
              name="weight"
              pattern="^[0-9]*$"
              required
            />
          </div>
          {/* <Btn className={s.btn} type="submit" variant="plus">
              <BsPlusLg className={s.icon} /> 
            </Btn> */}
          <div className={s.btn}>
            {width > 768 ? (
              <Btn className={s.btn} type="submit" variant="plus">
                <BsPlusLg className={s.icon} />
              </Btn>
            ) : (
              <div className={s.btnMobil}>
                <Btn className={s.btn} type="submit" variant="login">
                  Додати продукт
                </Btn>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};
