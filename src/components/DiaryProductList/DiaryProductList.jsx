import React from 'react';
import DiaryProductsListItem from '../DiaryProductListItem/DiaryProductListItem';
import { useDispatch, useSelector } from 'react-redux';
import { SelectDate, SelectDayData, SelectUserData } from 'redux/diary/diarySelectors';
import { deleteProductOper, getInfoOper } from 'redux/diary/diaryOperation';
import { selectUserName } from 'redux/authorization/authSelectors';

export function DiaryProductsList() {
  const eatenProducts = useSelector(state=> state.searchData.eatenProducts)
  const dayId = useSelector(state=> state.searchData.dayId)
  const date = useSelector(SelectDate);
  const dispatch = useDispatch();
  // const data = useSelector(SelectDayData);
  // const dispatch = useDispatch();
  // console.log(data);
  const array = eatenProducts;
  // нотіфкатіон коли арей 0 ! !!!!!!!!!!!!!!!!!!!!!!!
  console.log(eatenProducts);
  // const dayId = data?.id;
  console.log(dayId);
  // const dayId = data?.day?.daySummary;
  const deleteProduct = e => {
    console.log(e.target)
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
            // <li key={item.id}>
            //   <span>{item.title}</span>
            //   <span>{item.weight} </span>
            //   <span>{Math.floor(item.kcal)}</span>
            //   <button type="button" 
            //   onClick={()=>{dispatch(deleteProductOper({dayId, item.id}))}}>
            //     UJCGJLB
            //   </button>
            // </li>
          ))
        ) : (
          <p>Why dont you eat</p>
        )}
      </ul>
    </div>
  );
}

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteProductOper } from 'redux/diary/diaryOperation';

//  const DiaryProductListItem = ({ dayId, title, kcal, weight, eatenProductId }) => {
//  const dispatch = useDispatch();

//   // const deleteItem = () => {
//     console.log(dayId,eatenProductId);
//   // };

//   return (

//     <div>
//       <li>
//         <span>{title}</span>
//         <span>{weight} </span>
//         <span>{Math.floor(kcal)}</span>
//         <button type='button' onClick={console.log('dayId, eatenProductId')}>UJCGJLB</button>
//       </li>
//     </div>
//   );
// };
// export default DiaryProductListItem;
