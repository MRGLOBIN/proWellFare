'use client'

import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { gridClasses } from '@mui/material'

const columns = [
  {
    field: 'sr',
    headerName: 'SR',
    minidth: 50,
    flex: 1,
    headerClassName: 'bg-[#686868] ',
    // headerAlign: 'center',
  },
  {
    field: 'sender',
    headerName: 'Sender',
    minidth: 100,
    flex: 2,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
  {
    field: 'sendon',
    headerName: 'Send On',
    minidth: 100,
    flex: 2,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
  {
    field: 'conditions',
    headerName: 'Conditions',
    minidth: 150,
    flex: 3,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
  {
    field: 'aux',
    headerName: 'Auxilary Minutes',
    minidth: 150,
    flex: 3,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
  {
    field: 'pratice',
    headerName: 'NO. OF PRACTICE',
    minidth: 150,
    flex: 3,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
]

const rows = [
  {
    id: 2,
    sr: 'asd',
    sender: 'asd',
    sendon: 'asd',
    conditions: 'asd',
    aux: 'fedrf',
    pratice: 'lkmk',
  },
  {
    id: 1,
    sr: 'jkl',
    sender: 'asd',
    sendon: 'asd',
    conditions: 'asd',
    aux: 'fedrf',
    pratice: 'lkmk',
  },
]

const DataGridExample = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnHeaderHeight={40}
        // disableColumnMenu
        // disableColumnResize
        // disableColumnSelector
        // disableColumnSorting
        // disableDensitySelector
        // disableMultipleRowSelection
        // disableRowSelectionOnClick
        disableEval
        className='m-4 bg-[#2A2D38]'
        getRowSpacing={param => {
          return {
            top: param.isFirstVisible ? 0 : 5,
            bottom: param.isLastVisible ? 0 : 5,
          }
        }}
        sx={{
          border: 'none',
          color: '#D2D2D2',
          '& .MuiDataGrid-columnHeaders': {
            color: '#D2D2D2',
            fontSize: '12px',
          },
          '&::after': {
            content: 'none',
            height: '10px',
          },
          '& .MuiDataGrid-cell': {
            border: 'none',
          },
          '& .MuiDataGrid-row': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-footerContainer': {
            color: '#D2D2D2',
            borderTop: 'none',
            background: '#686868',
            borderRadius: '2px',
          },

          '& .css-1jlz3st': { border: 'none' },
          '& .MuiToolbar-root': {
            color: '#D2D2D2',
          },
          '& .MuiSvgIcon-root': {
            color: '#D2D2D2',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: '900',
          },
        }}
      />
    </div>
  )
}

export default DataGridExample
