import React from 'react';

export const DiaryProductListItem = ({ title, kcal, weight, id }) => {
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
