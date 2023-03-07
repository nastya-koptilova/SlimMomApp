import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

export const DiaryAddProductForm = () => {
  const [date, setDate] = useState();
  const [products, setProducts] = useState();
  const [weight, setWeight] = useState();

  const userMap = {
    products: setProducts,
    weight: setWeight,
  };
  const handleAddProducts = event => {
    const { name, value } = event.target;
    userMap[name](value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            placeholder="Введіть назву продукту"
            type="text"
            name="title"
            autoComplete="off"
            onChange={handleAddProducts}
            // value={query}
          />
        </label>
        <label>
          <input
            placeholder="Грам"
            type="text"
            name="weight"
            autoComplete="off"
            onChange={handleAddProducts}
            // value={query}
          ></input>
        </label>
        <button type="submit">Додати</button>
      </form>
    </div>
  );
};
