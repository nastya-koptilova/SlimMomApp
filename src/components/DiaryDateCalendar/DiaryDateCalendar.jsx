import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserInput } from './BrowserInput';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
// import s from '../DiaryAddProductForm/DiaryAddProductForm.module.scss';
import s from './DiaryDataCalendar.module.scss';
import { getUserInfo } from 'redux/authorization/authOperations';
import { setDate } from 'redux/diary/diarySlice';
import moment from 'moment';

const DiaryDateCalendar = () => {
  const dispatch = useDispatch();

  const handleChangeDate = value => {
    dispatch(setDate(moment(value.$d).format('YYYY-MM-DD')));
    dispatch(getUserInfo());
  };

  
  const getCurrentDate = () => {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className={s.inputCalendar}
        format="DD.MM.YYYY"
        defaultValue={dayjs(getCurrentDate())}
        label="Custom input"
        slots={{
          textField: BrowserInput,
        }}
        onChange={handleChangeDate}
      />
    </LocalizationProvider>
  );
};

export default DiaryDateCalendar;
