import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSearchOper } from 'redux/diary/diaryOperation';
import { filterProduct } from 'redux/diary/diarySlice';
// import { useDispatch } from 'react-redux';
import moment from 'moment';
import DiaryDateCalendar from '../DiaryDateCalendar/DiaryDateCalendar';
import { addEatedProduct, getProductsByTitle } from 'redux/products/operations';
import s from './DiaryAddProductForm.module.scss';
import { selectSelectedProducts } from 'redux/products/selectors';
import { setSelectedProduct } from 'redux/products/slice';
import { useLocation, useNavigate } from 'react-router';



export const DiaryAddProductForm = () => {
  const [title, setTitle] = useState('');
  const [product, setProduct] = useState('');
  const [date, setDate] = useState('');
  const [products, setProducts] = useState();
  const [weight, setWeight] = useState(''); 

  const handleChangeDate = (value) => {
    setDate(moment(value.$d).format("YYYY-MM-DD"));
    // console.log(date)  
  }

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  let sp = useSelector(selectSelectedProducts);

  const handleAddProduct = e => {
    e.preventDefault();
    console.log('sjsfjsdb');
    dispatch(addEatedProduct({ product, weight, date }));
    dispatch(setSelectedProduct());
    setProduct('');
    resetForm();
    location.state?.from && navigate(location.state?.from);
  };

  useEffect(() => {
    if (title.length >= 3) {
      dispatch(getProductsByTitle(title));
    } else {
      setProduct('');
      dispatch(setSelectedProduct());
    }
  }, [dispatch, title]);

  const resetForm = () => {
    setTitle('');
    setWeight('');
  };

  return (
 
   <>   
   <DiaryDateCalendar onChange={handleChangeDate}/>
    <form className={s.Form} onSubmit={handleAddProduct}>
      <div className="field-product">
        <input className={s.Input}
          id="title"
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.currentTarget.value);
          }}
          name="title"
          required
        />
        <label className={s.LabelTitle} htmlFor="title">Введіть назву продукту
        </label>
        <ul className={s.filteredList}>
          {title.length >= 3 &&
            !product &&
            sp.map(({ _id, title }) => (
              <li key={_id}>
                <button
                  type="button"
                  onClick={() => {
                    setTitle(title);
                    setProduct(_id);
                  }}
                >
                  {title}
                </button>
              </li>
            ))}
        </ul>
      </div>

      <div className={s.FieldWeight}>
        <input className={s.InputWeight}
          id="weight"
          type="number"
          value={weight}
          onChange={e => setWeight(e.currentTarget.value)}
          name="weight"
          pattern="^[0-9]*$"
          required
        />
        <label className={s.LabelWeight}
          htmlFor="weight">Грами</label>
      </div>

      <button className={s.buttonIcon} type="submit" disabled={!product || !title || !weight}>
        <svg width="14" height="14">
          <path d="M13.72 7.96H7.96v5.76H6.04V7.96H.28V6.04h5.76V.28h1.92v5.76h5.76v1.92Z" />
        </svg>
      </button>

      <button className={s.buttonAdd} type="submit" disabled={!product || !title || !weight}>
        <span>Додати</span>
      </button>
    </form>
    </>
  );
};