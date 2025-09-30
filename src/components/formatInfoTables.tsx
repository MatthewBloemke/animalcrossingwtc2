import React from 'react';
import Image from 'next/image';
import { DataGrid } from '@mui/x-data-grid';
import { asTwelveHourTimeString } from '@/components/dateTime';

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

interface bugObject {
  bug_image: string;
  bug_name: string;
  catch_time_end: string;
  catch_time_start: string;
  location: string;
  months_str: string;
  price: number;
  months_array: Array<number>;
}

const dataGridStyles = {
  root: {
    '& .MuiDataGrid-cell': {
      borderRight: '1px solid #333',
      color: '#333',
      borderBottom: '1px solid #333 !important',
    },
    '& .MuiDataGrid-columnHeaders': {
      borderBottom: '1px solid #333',
      color: '#333',
    },
    '& .MuiDataGrid-footerContainer': {
      borderTop: '1px solid #333',
      color: '#333',
      '& .MuiTablePagination-root': {
        color: '#333',
      },
      '& .MuiSvgIcon-root': {
        color: '#333',
      },
    },
    '& .MuiDataGrid-toolbarContainer': {
      color: '#333',
      '& .MuiSvgIcon-root': {
        color: '#333',
      },
      '& .MuiButton-root': {
        color: '#333',
      },
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
      color: '#333',
      '& .MuiSvgIcon-root': {
        color: '#333',
      },
    },
    '& .MuiSvgIcon-root': {
      color: '#333',
    },
    '& .MuiDataGrid-menu': {
      '& .MuiPaper-root': {
        backgroundColor: '#fdf6e3',
        color: '#333',
      },
      '& .MuiMenuItem-root': {
        color: '#333',
        '& .MuiSvgIcon-root': {
          color: '#333',
        },
      },
    },
    borderColor: '#333',
    color: '#333',
  },
};

export function formatBugTable(bugs: Array<bugObject>) {
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
      bug_name:
        bugs[i].bug_name.charAt(0).toUpperCase() + bugs[i].bug_name.slice(1),
      price: bugs[i].price,
      location: bugs[i].location,
      timeRange: timeRange,
      months: bugs[i].months_str,
    });
  }
  return (
    <div
      style={{ height: 500, backgroundColor: '#fdf6e3' }}
      className="p-3 rounded-xl border-[#b18b58] border-4 shadow-lg"
    >
      <DataGrid rows={rows} columns={columns} sx={dataGridStyles.root} />
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
      fish_name:
        fish[i].fish_name.charAt(0).toUpperCase() + fish[i].fish_name.slice(1),
      price: fish[i].price,
      shadow_size: fish[i].shadow_size,
      location: fish[i].location,
      timeRange: timeRange,
      months: fish[i].months_str,
    });
  }
  return (
    <div
      style={{ height: 500, backgroundColor: '#fdf6e3' }}
      className="p-3 rounded-xl border-[#b18b58] border-4 shadow-lg"
    >
      <DataGrid rows={rows} columns={columns} sx={dataGridStyles.root} />
    </div>
  );
}
