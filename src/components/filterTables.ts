const splitterHelper = (timeString: string) => {
  (timeString);
  if (timeString.includes(' – ')){ 
    return timeString.split(' – ');
  }
  if (timeString.includes('–')){
    return timeString.split(' – ');
  } else if (timeString.includes('-')) {
    return timeString.split(' - ');
  } else if (timeString.includes(' – ')) {
    return timeString.split(' – ');
  }
};

const convertToTimeObject = (timeRanges: any) => {
  const result: any = []
  timeRanges.forEach((range: string) => {
      let startTime = range[0]
      let endTime = range[1]
      if (startTime.includes('PM')) {
          startTime = `${Number(startTime.slice(0,2)) + 12}`
      } else {
          startTime = `${Number(startTime.slice(0,2))}`
      }
      if (endTime.includes('PM')) {
          endTime = `${Number(endTime.slice(0,2)) + 12}`
      } else {
          endTime = `${Number(endTime.slice(0,2))
      }`}
      result.push({startTime: `${startTime}:00`, endTime: `${endTime}:00`})
  })
  return result
}

export function filterTables (array: any, time: any, month: any) {
  const arrFilteredByMonth = array.filter((item: any) => item.months_array.includes(month));
  const tempArr = [];
  for (let i = 0; i < arrFilteredByMonth.length; i++) {
      if (arrFilteredByMonth[i].catch_time_end > arrFilteredByMonth[i].catch_time_start) {
          if (time > arrFilteredByMonth[i].catch_time_start && time < arrFilteredByMonth[i].catch_time_end) {
              tempArr.push(arrFilteredByMonth[i]);
          };
      } else {
          if (time > arrFilteredByMonth[i].catch_time_start || time < arrFilteredByMonth[i].catch_time_end) {
              tempArr.push(arrFilteredByMonth[i]);
          };
      };
  };
  return tempArr;
};

interface times {
  startTime: any,
  endTime: any
}

export function filter_nh_Tables (array: any, time: any, month: any, hemisphere: string) {

  const filteredArray: any = [];
  array.forEach((item: any) => {
      const itemCatchRange = item[hemisphere].times_by_month[month];
      if (itemCatchRange === 'All day') {
          filteredArray.push(item)
      } else {
          const itemCatchRangeArray = (itemCatchRange.split(' & ')).map((item: any) => splitterHelper(item))
          const itemCatchValues = convertToTimeObject(itemCatchRangeArray)

          itemCatchValues.forEach(({startTime, endTime}: times) => {
              if (endTime > startTime) {
                  if (time > startTime && time < endTime) {
                      filteredArray.includes(item) ? null : filteredArray.push(item);
                  };
              } else {
                  if (time > startTime || time < endTime) {
                      filteredArray.includes(item) ? null : filteredArray.push(item);
                  };
              };
          })
      }
  });

  return filteredArray;
};