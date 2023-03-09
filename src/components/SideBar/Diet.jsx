import React from 'react'
import { nanoid } from 'nanoid';
import s from './Sidebar.module.css';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/dailyCalories/caloriesSelectors';

export const Diet = () => {
    const user = useSelector(selectUserInfo);
    const diet = user.notAllowedProducts;

    function isGetDiet() {
        if (diet === undefined || diet.length === 0) return false;
        return true;
    };

    function ucFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
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
