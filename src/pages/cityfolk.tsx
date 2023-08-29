/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Grid, FormControl } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { filterTables } from '@/components/filterTables';
import { formatBugTable, formatFishTable } from '@/components/formatInfoTables';
import {
  asPrettyDate,
  asTwelveHourTimeString,
  now,
  currentMonth,
} from '@/components/dateTime';
import bugs from '../../public/data/00-cf_bugs.json';
import fish from '../../public/data/01-cf_fish.json';


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
    const filteredBugs = filterTables(bugs, time, month);
    const filteredFish = filterTables(fish, time, month);
    const formattedBugs: any = formatBugTable(filteredBugs);
    const formattedFish: any = formatFishTable(filteredFish);
    setBugTable(formattedBugs);
    setFishTable(formattedFish);
  }, [activeDate, month, time]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-col items-center md:flex-row justify-evenly mt-24 bg-[#f0f0f0] w-[90%] md:w-[70%] mx-auto rounded-xl p-5">
        <FormControl
          className="p-[6px] rounded-md"
          sx={{
            width: '10%',
            minWidth: '250px',
            height: '65px',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              value={activeDate}
              onChange={handleChange}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl
          className="p-[6px] rounded-md"
          sx={{
            width: '10px',
            minWidth: '250px',
            height: '65px',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Time"
              value={activeDate}
              onChange={handleTimeChange}
            />
          </LocalizationProvider>
        </FormControl>
      </div>
      <div className="flex justify-evenly my-4 w-[70%] mx-auto bg-[#f0f0f0] rounded-xl">
        <p
          className="dateTime p-3"
          style={{
            fontFamily: 'FinkHeavy',
            fontSize: '2em',
            color: '',
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
