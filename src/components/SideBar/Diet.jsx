import React from 'react'
import { nanoid } from 'nanoid';
import s from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import { userData } from '../../redux/authorization/authSelectors';

export const Diet = () => {
    const user = useSelector(userData);
    console.log(user)

    const diet = user !== null && user !== undefined ? user.notAllowedProducts : [];
    function isGetDiet() {
        if (user === undefined || user === null) return false;
        return true;
    };
    return (
        <section>
            <p className={s.SidebarTitle}>Їжа не рекомендована</p>
            {!isGetDiet() && (<p className={s.SidebarText}>Ваша дієта буде відображатися тут</p>)}
            {isGetDiet() &&
                (<ul className={s.SidebarList}>
                    {diet.map((product, index) => {
                        if (index < 4) {
                            return (
                                <li className={s.SidebarItem} key={nanoid()}>
                                    <p className={s.SidebarText}>{product}</p>
                                </li>
                            );
                        } else {
                            return null;
                        }
                    })}
                </ul>)}
        </section>)
}
