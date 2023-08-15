import React, { useEffect, useState } from 'react';
import {
  asPrettyDate,
  asTwelveHourTimeString,
  now,
  currentMonth,
} from '@/components/dateTime';
import { Grid, FormControl, TextField } from '@mui/material';
import { filter_nh_Tables } from '@/components/filterTables';
import {
  formatNHBugTable,
  formatNHFishTable,
} from '@/components/formatNewHorizonTables';
import { pullNHbugs, pullNHfish } from '@/components/api';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const SouthDash = () => {
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
    const loadNhArrays = async () => {
      const fishResponse = await pullNHfish(month);
      const filteredFish = filter_nh_Tables(
        fishResponse.south,
        time,
        month,
        'south'
      );
      const formattedFish: any = formatNHFishTable(
        filteredFish,
        month,
        'south'
      );
      setFishTable(formattedFish);

      const bugResponse = await pullNHbugs(month);
      const filteredBugs = filter_nh_Tables(
        bugResponse.south,
        time,
        month,
        'south'
      );
      const formattedBugs: any = formatNHBugTable(filteredBugs, month, 'south');
      setBugTable(formattedBugs);
    };
    loadNhArrays();
  }, [activeDate, month, time]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-col items-center md:flex-row justify-evenly mt-24">
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
              onChange={handleChange}
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

export default SouthDash;
