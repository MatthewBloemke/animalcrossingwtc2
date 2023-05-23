import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { asTwelveHourTimeString } from '@/components/dateTime';
import Image from 'next/image';

const renderImage = (params: any) => {
  return (
    <Image
      alt={params.row.id}
      src={`/assets/${params.row.id}.png`}
      height={64}
      width={64}
    />
  );
};

export function formatBugTable(bugs: any) {
  const columns: any = [
    {
      field: 'image',
      headerName: '',
      renderCell: renderImage,
      minWidth: 64,
      flex: 2,
      align: 'center',
    },
    { field: 'bug_name', headerName: 'Bug Name', minWidth: 115, flex: 2 },
    { field: 'price', headerName: 'Price', minWidth: 65, flex: 2 },
    { field: 'location', headerName: 'Location', minWidth: 185, flex: 2 },
    { field: 'timeRange', headerName: 'Time', minWidth: 140, flex: 2 },
    { field: 'months', headerName: 'Months', minWidth: 190, flex: 2 },
  ];
  const rows = [];
  for (let i = 0; i < bugs.length; i++) {
    let timeRange = '';
    if (bugs[i].catch_time_start === '0:00') {
      timeRange = 'All day';
    } else {
      timeRange = `${asTwelveHourTimeString(
        bugs[i].catch_time_start
      )} - ${asTwelveHourTimeString(bugs[i].catch_time_end)}`;
    }
    rows.push({
      id: bugs[i].bug_name,
      bug_name: bugs[i].bug_name,
      price: bugs[i].price,
      location: bugs[i].location,
      timeRange: timeRange,
      months: bugs[i].months_str,
    });
  }
  return (
    <div
      style={{ height: 500, backgroundColor: '#f0f0f0' }}
      className="p-3 rounded-xl"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
      />
    </div>
  );
}

export function formatFishTable(fish: any) {
  const columns: any = [
    {
      field: 'image',
      headerName: '',
      renderCell: renderImage,
      minWidth: 64,
      flex: 2,
      align: 'center',
    },
    { field: 'fish_name', headerName: 'Fish Name', minWidth: 115, flex: 2 },
    { field: 'price', headerName: 'Price', minWidth: 65, flex: 2 },
    { field: 'shadow_size', headerName: 'Shadow Size', minWidth: 120, flex: 2 },
    { field: 'location', headerName: 'Location', minWidth: 185, flex: 2 },
    { field: 'timeRange', headerName: 'Time', minWidth: 140, flex: 2 },
    { field: 'months', headerName: 'Months', minWidth: 190, flex: 2 },
  ];
  const rows = [];
  for (let i = 0; i < fish.length; i++) {
    let timeRange = '';
    if (fish[i].catch_time_start === '0:00') {
      timeRange = 'All day';
    } else {
      timeRange = `${asTwelveHourTimeString(
        fish[i].catch_time_start
      )} - ${asTwelveHourTimeString(fish[i].catch_time_end)}`;
    }
    rows.push({
      id: fish[i].fish_name,
      fish_name: fish[i].fish_name,
      price: fish[i].price,
      shadow_size: fish[i].shadow_size,
      location: fish[i].location,
      timeRange: timeRange,
      months: fish[i].months_str,
    });
  }
  return (
    <div
      style={{ height: 500, backgroundColor: '#f0f0f0' }}
      className="p-3 rounded-xl"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
      />
    </div>
  );
}
