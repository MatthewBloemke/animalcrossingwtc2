import React, { useEffect, useState } from 'react';
import { Grid, FormControl, Select, MenuItem } from '@mui/material';
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
import InputLabel from '@mui/material/InputLabel';

const NorthDash = ({ hemisphere, setHemisphere }: any) => {
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
        fishResponse.north,
        time,
        month,
        'north'
      );
      const formattedFish: any = formatNHFishTable(
        filteredFish,
        month,
        'north'
      );
      setFishTable(formattedFish);

      const bugResponse = await pullNHbugs(month);
      const filteredBugs = filter_nh_Tables(
        bugResponse.north,
        time,
        month,
        'north'
      );
      const formattedBugs: any = formatNHBugTable(filteredBugs, month, 'north');
      setBugTable(formattedBugs);
    };
    loadNhArrays();
  }, [activeDate, month, time]);
  console.log('north');

  return (
    <div className="h-full w-full flex flex-col">
      <div className="md:mt-24 flex flex-col items-center md:flex-row justify-evenly mb-2 mt-20 w-[80%] mx-auto bg-[#fdf6e3] p-5 rounded-lg shadow-lg border-[#b18b58] border-4">
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
            <InputLabel id="select-label">Hemisphere</InputLabel>
            <Select
              style={{
                width: '100%',
              }}
              labelId="select-label"
              id="select"
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

export default NorthDash;
