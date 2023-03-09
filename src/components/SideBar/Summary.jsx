import React from 'react'
import { format } from 'date-fns';
import s from './Sidebar.module.css';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/dailyCalories/caloriesSelectors';

// export const Summary = () => {
//     const user = useSelector(selectUserInfo);
//     const currentDate = format(Date.now(), 'dd-MM-yyyy');
//     const dailyRate = user.dailyRate;
//     const left = 0;
//     const consumed = 0;
//     const partOfNormal = 0;

//     console.log(user);

//     return (
//         <div>
//             <h3 className={s.SidebarTitle}>Резюме для {currentDate}</h3>
//             <ul className={s.SidebarList}>
//                 <li className={s.SidebarItem}>
//                     <p className={s.SidebarText}>Залишилось</p>
//                     <p className={s.SidebarText}>{left || '000'} ккал</p>
//                 </li>
//                 <li className={s.SidebarItem}>
//                     <p className={s.SidebarText}>Спожито</p>
//                     <p className={s.SidebarText}>{consumed || '000'} ккал</p>
//                 </li>
//                 <li className={s.SidebarItem}>
//                     <p className={s.SidebarText}>Денна норма</p>
//                     <p className={s.SidebarText}>{dailyRate || '000'} ккал</p>
//                 </li>
//                 <li className={s.SidebarItem}>
//                     <p className={s.SidebarText}>% від норми</p>
//                     <p className={s.SidebarText}>{`${partOfNormal || '00'} %`}</p>
//                 </li>
//             </ul>
//         </div>
//     );
// }    
