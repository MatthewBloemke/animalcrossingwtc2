import React from 'react';
import Image from 'next/image';
import { DataGrid } from '@mui/x-data-grid';

const renderImage = (params: any) => {
  const bugName = params.row.bug_name;
  return (
    <Image src={params.row.id} height={64} width={64} alt={`${bugName}`} />
  );
};

const dataGridStyles = {
  root: {
    '& .MuiDataGrid-cell': {
      borderRight: '1px solid #fff',
      borderBottom: '1px solid #fff !important',
    },
    '& .MuiDataGrid-columnHeaders': {
      borderBottom: '1px solid #fff',
    },
    '& .MuiDataGrid-footerContainer': {
      borderTop: '1px solid #fff',
    },
    '& .MuiDataGrid-root': {
      borderColor: '#fff',
    },
    borderColor: '#fff',
  },
};

export function formatNHBugTable(bugs: any, month: any, hemisphere: any) {
  console.log(bugs);
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
    { field: 'nookPrice', headerName: 'Nook Price', minWidth: 65, flex: 2 },
    { field: 'flickPrice', headerName: 'Flick Price', minWidth: 65, flex: 2 },
    { field: 'location', headerName: 'Location', minWidth: 185, flex: 2 },
    { field: 'timeRange', headerName: 'Time', minWidth: 140, flex: 2 },
    { field: 'months', headerName: 'Months', minWidth: 190, flex: 2 },
  ];
  const rows = [];
  for (let i = 0; i < bugs.length; i++) {
    rows.push({
      id: bugs[i].image_url,
      bug_name: bugs[i].name,
      nookPrice: bugs[i].sell_nook,
      flickPrice: bugs[i].sell_flick,
      location: bugs[i].location,
      timeRange: bugs[i][hemisphere].times_by_month[month],
      months: bugs[i][hemisphere].months,
    });
  }
  return (
    <div
      style={{ height: 500, backgroundColor: '#1b9938' }}
      className="p-3 rounded-xl"
    >
      <DataGrid rows={rows} columns={columns} sx={dataGridStyles.root} />
    </div>
  );
}

export function formatNHFishTable(fish: any, month: any, hemisphere: any) {
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
    { field: 'cjPrice', headerName: 'CJ Price', minWidth: 65, flex: 2 },
    { field: 'nookPrice', headerName: 'Nook Price', minWidth: 65, flex: 2 },
    { field: 'shadow_size', headerName: 'Shadow Size', minWidth: 120, flex: 2 },
    { field: 'location', headerName: 'Location', minWidth: 185, flex: 2 },
    { field: 'timeRange', headerName: 'Time', minWidth: 140, flex: 2 },
    { field: 'months', headerName: 'Months', minWidth: 190, flex: 2 },
  ];
  const rows = [];
  for (let i = 0; i < fish.length; i++) {
    rows.push({
      id: fish[i].image_url,
      fish_name: fish[i].name,
      cjPrice: fish[i].sell_cj,
      nookPrice: fish[i].sell_nook,
      shadow_size: fish[i].shadow_size,
      location: fish[i].location,
      timeRange: fish[i][hemisphere].times_by_month[month],
      months: fish[i][hemisphere].months,
    });
  }
  return (
    <div
      style={{ height: 500, backgroundColor: '#1b9938' }}
      className="p-3 rounded-xl"
    >
      <DataGrid rows={rows} columns={columns} sx={dataGridStyles.root} />
    </div>
  );
}
