import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSearchOper } from 'redux/diary/diaryOperation';
import { filterProduct } from 'redux/diary/diarySlice';
// import { useDispatch } from 'react-redux';
import moment from 'moment';
import DiaryDateCalendar from '../DiaryDateCalendar/DiaryDateCalendar';

export const DiaryAddProductForm = () => {
  const [date, setDate] = useState('');
  const [products, setProducts] = useState();
  const [weight, setWeight] = useState();

  const handleChangeDate = (value) => {
    setDate(moment(value.$d).format("YYYY-MM-DD"));
    // console.log(date)
  }

  const filter = useSelector(state => state.searchData.filter);

  const dispatch = useDispatch();

  // const userMap = {
  //   products: setProducts,
  //   weight: setWeight,
  // };
  const handleAddProducts = event => {
    const value = event.target.value;
    dispatch(filterProduct(value));
    dispatch(productSearchOper(value));
    // userMap[name](value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    event.target.reset();
  };

  return (
    <div>
    <DiaryDateCalendar onChange={handleChangeDate}/>

      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            placeholder="Введіть назву продукту"
            type="text"
            name="title"
            autoComplete="off"
            onChange={handleAddProducts}
            value={filter}
          />
        </label>
        {/* <label>
          <input
            placeholder="Грам"
            type="text"
            name="weight"
            autoComplete="off"
            onChange={handleAddProducts}
            // value={filter}
          ></input>
        </label> */}
        <button type="submit">Додати</button>
      </form>
    </div>
  );
};
