import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Burger/Burger.module.scss';

export default function Burger({ show, onToggle }) {
  if (!show) {
    return null;
  }

  return (
    <ul className={s.burger__list}>
      <li className={s.burger__item}>
        <NavLink
          onClick={onToggle}
          className={({ isActive }) => (isActive ? s.active : s.default)}
          to="/daily"
        >
          Щоденник
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={onToggle}
          className={({ isActive }) => (isActive ? s.active : s.default)}
          to="/calculator"
        >
          КАЛЬКУЛЯТОР
        </NavLink>
      </li>
    </ul>
  );
}
//дописати логіку по toggle
