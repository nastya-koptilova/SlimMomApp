import React, { useState } from 'react';
import scss from './AuthorizationForm.module.scss';

const AuthorizationForm = ({ isRegisterForm = true, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMap = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    userMap[name](value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (isRegisterForm) {
      onSubmit({ name, email, password });
      return;
    }
    onSubmit({ email, password });
  };

  return (
    <form className={scss.authorization_form} onSubmit={handleFormSubmit}>
      <h2 className={scss.authorization__title}>
        {isRegisterForm ? 'Реєстрація' : 'Вхід'}
      </h2>
      {isRegisterForm && (
        <label>
          <input
            className={scss.authorization__input}
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Ім'я"
            required
            onChange={handleInputChange}
          />
        </label>
      )}
      <label>
        <input
          className={scss.authorization__input}
          type="email"
          id="email"
          name="email"
          placeholder="Електронна пошта"
          required
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          className={scss.authorization__input}
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          minLength={7}
          required
          onChange={handleInputChange}
        />
      </label>
      <div className={scss.authorization__buttons_container}>
        <button className={scss.authorization__button} type="submit">
          {isRegisterForm ? 'Зареєструватися' : 'Увійти'}
        </button>
        <a className={scss.authorization__link} href="#">{isRegisterForm ? 'Увійти' : 'Зареєструватися'}</a>
      </div>
    </form>
  );
};

export default AuthorizationForm;
