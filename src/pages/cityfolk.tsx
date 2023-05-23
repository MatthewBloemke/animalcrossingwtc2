/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { filterTables } from '@/components/filterTables';
import { formatBugTable, formatFishTable } from '@/components/formatInfoTables';
import {
  asPrettyDate,
  asTwelveHourTimeString,
  now,
  currentMonth,
} from '@/components/dateTime';
import { Grid, TextField, FormControl } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const bugs = require('../../public/data/00-cf_bugs.json');
const fish = require('../../public/data/01-cf_fish.json');

const cityfolk = () => {
  const [bugTable, setBugTable] = useState([]);
  const [fishTable, setFishTable] = useState([]);
  const [time, setTime] = useState(now());
  const [month, setMonth] = useState(currentMonth());
  const [activeDate, setActiveDate] = useState(new Date(Date.now()));

  const handleChange = (newDate: any) => {
    setMonth(newDate.getMonth() + 1);
    setActiveDate(newDate);
  };

  const handleTimeChange = (newTime: any) => {
    setTime(newTime.getHours() + ':' + newTime.getMinutes());
    setActiveDate(newTime);
  };
  useEffect(() => {
    setBugTable(formatBugTable(filterTables(bugs, time, month)));
    setFishTable(formatFishTable(filterTables(fish, time, month)));
  }, [activeDate, month, time]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-20 flex w-[95%] m-auto items-center justify-center my-8">
        <h2
          className="p-3 md:p-5 rounded-lg shadow-xl text-3xl md:text-5xl"
          id="header"
          style={{
            fontFamily: 'FinkHeavy',
            color: 'white',
          }}
        >
          Animal Crossing: City Folk
        </h2>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-evenly">
        <FormControl
          className="p-[6px] rounded-md shadow-xl"
          sx={{
            width: '10%',
            minWidth: '250px',
            height: '65px',
            backgroundColor: 'white',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              value={activeDate}
              name="date"
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl
          className="p-[6px] rounded-md shadow-xl m-3 md:m-0"
          sx={{
            width: '10px',
            minWidth: '250px',
            height: '65px',
            backgroundColor: 'white',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Time"
              value={activeDate}
              onChange={handleTimeChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
      </div>
      <div className="flex justify-evenly my-4 w-[95%] m-auto">
        <p
          className="dateTime p-3 rounded-md shadow-xl"
          style={{
            fontFamily: 'FinkHeavy',
            fontSize: '2em',
            color: 'white',
          }}
        >
          {asPrettyDate(activeDate)}, {asTwelveHourTimeString(time)}
        </p>
      </div>
      <Grid item xs={12}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item sx={{ width: '80%' }}>
            {bugTable}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mt: '15px', mb: '15px' }}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item sx={{ width: '80%' }}>
            {fishTable}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default cityfolk;
