import React from 'react'
import { nanoid } from 'nanoid';
import s from './Sidebar.module.css';

export const Diet = ({ diet }) => {
    function isGetDiet() {
        if (diet === undefined || diet.length === 0) return false;
        return true;
    };
    return (
        <>
            <p className={s.SidebarTitle}>Їжа не рекомендована</p>
            {!isGetDiet() && (<p className={s.SidebarText}>Ваша дієта буде відображатися тут</p>)}
            {isGetDiet() &&
                (<ul className={s.SidebarList}>
                    {diet.map((product) => (
                        <li className={s.SidebarItem} key={nanoid()}>
                            <p className={s.SidebarText}>product</p>
                        </li>
                    ))}
                </ul>)}
        </>)
}
