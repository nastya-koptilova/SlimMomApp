import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserInput } from './BrowserInput';
import dayjs from 'dayjs';

const DiaryDateCalendar = () => {
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
        defaultValue={dayjs(getCurrentDate())}
        label="Custom input"
        slots={{
          textField: BrowserInput,
        }}
      />
    </LocalizationProvider>
  );
};

export default DiaryDateCalendar;
