import React from 'react'
import { format } from 'date-fns';
import s from './Sidebar.module.css';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/dailyCalories/caloriesSelectors';
import { SelectDate } from '../../redux/diary/diarySelectors';

export const Summary = () => {
    const user = useSelector(selectUserInfo);
    const selectedDate = useSelector(SelectDate);

    const dailyRate = user !== null && user !== undefined ? user.dailyRate : '000';
    const consumed = user !== null && user !== undefined ? user.summaries[0].kcalConsumed : '000';
    const left = user !== null && user !== undefined ? user.summaries[0].kcalLeft : '000';
    const partOfNormal = user !== null && user !== undefined ? Math.round((consumed * 100) / dailyRate) : '00';

    const currentDate = format(Date.now(), 'yyyy-MM-dd');
    const date = selectedDate !== null && selectedDate !== undefined ? selectedDate : currentDate;
    const summaryDate = date.split('-').reverse().join('.');

    return (
        <div>
            <h3 className={s.SidebarTitle}>Резюме для {summaryDate}</h3>
            <ul className={s.SidebarList}>
                <li className={s.SidebarItem}>
                    <p className={s.SidebarText}>Залишилось</p>
                    <p className={s.SidebarText}>{left} ккал</p>
                </li>
                <li className={s.SidebarItem}>
                    <p className={s.SidebarText}>Спожито</p>
                    <p className={s.SidebarText}>{consumed} ккал</p>
                </li>
                <li className={s.SidebarItem}>
                    <p className={s.SidebarText}>Денна норма</p>
                    <p className={s.SidebarText}>{dailyRate} ккал</p>
                </li>
                <li className={s.SidebarItem}>
                    <p className={s.SidebarText}>% від норми</p>
                    <p className={s.SidebarText}>{`${partOfNormal} %`}</p>
                </li>
            </ul>
        </div>
    );
}    

