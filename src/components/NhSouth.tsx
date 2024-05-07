import React, { useEffect, useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { now, currentMonth } from '@/components/dateTime';
import { filter_nh_Tables } from '@/components/filterTables';
import {
  formatNHBugTable,
  formatNHFishTable,
} from '@/components/formatNewHorizonTables';
import { pullNHbugs, pullNHfish } from '@/components/api';

const SouthDash = ({ hemisphere, setHemisphere }: any) => {
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
      <div className="md:mt-24 flex flex-col items-center md:flex-row justify-evenly mt-20 mb-2 w-[80%] mx-auto md:w-[80%] bg-[#1b9938] rounded-lg p-5">
        <div className="md:w-[30%] md:mb-0 mb-3 w-full">
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date"
                value={activeDate}
                onChange={handleChange}
              />
            </LocalizationProvider>
          </FormControl>
        </div>
        <div className="md:w-[30%] md:mb-0 mb-3 w-full">
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Time"
                value={activeDate}
                onChange={handleTimeChange}
              />
            </LocalizationProvider>
          </FormControl>
        </div>
        <div className="md:w-[30%] w-full">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={hemisphere}
              label="Age"
              onChange={({ target }) => setHemisphere(target.value)}
            >
              <MenuItem value={'North'}>North</MenuItem>
              <MenuItem value={'South'}>South</MenuItem>
            </Select>
          </FormControl>
        </div>
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
