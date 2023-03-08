import React from 'react';

 const DiaryProductListItem = ({ title, kcal, weight, id }) => {
  const deleteItem = () => {};

  return (
    <div>
      DiaryProductsListItem
      <li>
        <span>{title}</span>
        <span>{weight} </span>
        <span>{kcal}</span>
        <button onClick={deleteItem}>{/* хрестик іконка видалення */}</button>
      </li>
    </div>
  );
};
export default DiaryProductListItem;