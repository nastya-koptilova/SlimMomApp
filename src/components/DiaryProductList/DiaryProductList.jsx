import React from 'react';
import DiaryProductsListItem from '../DiaryProductListItem/DiaryProductListItem';
import { useDispatch, useSelector } from 'react-redux';
import { SelectDayData } from 'redux/diary/diarySelectors';
import { deleteProductOper } from 'redux/diary/diaryOperation';

export function DiaryProductsList() {
  const data = useSelector(SelectDayData);
  // const dispatch = useDispatch();
  console.log(data);
  // console.log(data?.day?.eatenProducts);
  const array = data?.day?.eatenProducts;
  // const dayId = data?.day?.id;
  const dayId = data?.day?.daySummary;
  return (
    <div>
      <ul>
        {array?.length > 0 ? (
          array.map(item => (
            <DiaryProductsListItem
              key={item.id}
              weight={item.weight}
              kcal={item.kcal}
              title={item.title}
              eatenProductId={item.id}
              dayId={dayId}
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
