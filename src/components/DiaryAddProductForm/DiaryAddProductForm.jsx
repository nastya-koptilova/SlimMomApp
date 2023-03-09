import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductOper,
  getInfoOper,
  productSearchOper,
} from 'redux/diary/diaryOperation';
import moment from 'moment';
import DiaryDateCalendar from '../DiaryDateCalendar/DiaryDateCalendar';
import s from './DiaryAddProductForm.module.scss';
import { setSelectedProduct } from 'redux/products/slice';
import { BsPlusLg } from 'react-icons/bs';
import { Btn } from 'components/Btn/Btn';
import { SelectDate, SelectProductsData } from 'redux/diary/diarySelectors';
import { setDate } from 'redux/diary/diarySlice';

export const DiaryAddProductForm = () => {
  const productsList = useSelector(SelectProductsData);
  const [title, setTitle] = useState('');
  const date = useSelector(SelectDate);
  // const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));

  const [weight, setWeight] = useState('');

  const handleChangeDate = value => {
    dispatch(setDate(moment(value.$d).format('YYYY-MM-DD')));
    dispatch(getInfoOper(date));
    // console.log(date);
  };

  const dispatch = useDispatch();

  const handleAddProduct = event => {
    event.preventDefault();
    //    if(!productsList.map(item => item.title.ua.includes(title))) {
    //  alert('nb kj[')
    //    }

    const productId = productsList[0]._id;
    console.log(productId);

    const data = {
      date,
      productId,
      weight,
    };
    dispatch(addProductOper(data));

    //  console.log(data);
    resetForm();
  };

  useEffect(() => {
    if (title.length >= 3) {
      dispatch(productSearchOper(title));
    } else {
      // dispatch(setSelectedProduct());
    }
  }, [dispatch, title]);

  const resetForm = () => {
    // setDate(moment(new Date()).format("YYYY-MM-DD"));
    setTitle('');
    setWeight('');
  };

  return (
    <>
      <form className={s.Form} onSubmit={handleAddProduct}>
        <DiaryDateCalendar onChange={handleChangeDate} />
        <div className="field-product">
          <input
            list="productsList"
            className={s.Input}
            type="text"
            value={title}
            onChange={e => {
              setTitle(e.currentTarget.value);
            }}
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

        {/* <button className={s.buttonIcon} type="submit" disabled={!product || !title || !weight}>
        <svg width="14" height="14">
          <path d="M13.72 7.96H7.96v5.76H6.04V7.96H.28V6.04h5.76V.28h1.92v5.76h5.76v1.92Z" />
        </svg>
      </button> */}
        {/* <Btn type="submit"> {BsPlusLg} </Btn> */}
        <Btn type="submit" variant="plus">
          <BsPlusLg className={s.icon} />
        </Btn>
        {/* <button className={s.buttonAdd} type="submit" > */}
        {/* disabled={!product || !title || !weight} */}
        {/* <span>Додати</span>
      </button> */}
      </form>
    </>
  );
};
