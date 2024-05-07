/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { filterTables } from '@/components/filterTables';
import { formatBugTable, formatFishTable } from '@/components/formatInfoTables';
import { now, currentMonth } from '@/components/dateTime';
import bugs from '../../public/data/00-cf_bugs.json';
import fish from '../../public/data/01-cf_fish.json';
import { FormControl, Grid } from '@mui/material';

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
      <div className="md:mt-24 flex flex-col items-center md:flex-row mb-2 justify-evenly mt-20 bg-[#1b9938] w-[80%] md:w-[80%] mx-auto rounded-xl p-5">
        <FormControl className="mb-4 md:mb-0 md:mr-6 w-full">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              value={activeDate}
              onChange={handleChange}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl className="w-full">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Time"
              value={activeDate}
              onChange={handleTimeChange}
            />
          </LocalizationProvider>
        </FormControl>
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
