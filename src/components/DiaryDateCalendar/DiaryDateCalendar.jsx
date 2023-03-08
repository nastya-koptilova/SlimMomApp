import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserInput } from './BrowserInput';
import dayjs from 'dayjs';
import {useState} from 'react';
import moment from 'moment';

const DiaryDateCalendar = () => {
  const [value, setValue] = useState('');
  const handleChangeDate = (value) =>{
    console.log(moment(value).format("MM/DD/YYYY"));
  }
  const getCurrentDate = () => {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    // console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        defaultValue={dayjs(getCurrentDate())}
        // format="MM/DD/YYYY"
        label="Custom input"
        slots={{
          textField: BrowserInput,
        }}
        onChange={handleChangeDate}
      />
      {/* <DatePicker
          label="Controlled picker"
          value={value}
          onChange={handleChangeDate}
        /> */}
    </LocalizationProvider>
  );
};

export default DiaryDateCalendar;
