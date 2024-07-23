'use client'

import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { gridClasses, GridClasses } from '@mui/material'

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
    sender: 'rwe',
    sendon: 'nbm',
    conditions: 'kiu',
    aux: 'fedrf',
    pratice: 'lkzxcmk',
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
        disableColumnSorting
        // disableDensitySelector
        // disableMultipleRowSelection
        // disableRowSelectionOnClick
        disableEval
        className='m-4 bg-[#2A2D38]'
        rowHeight={40}
        getRowSpacing={param => {
          return {
            top: 0,
            bottom: 0,
          }
        }}
        slotProps={{
          cell: {
            onMouseEnter: () => {},
            onMouseLeave: () => {},
          },
        }}
        sx={{
          border: 'none',
          color: '#D2D2D2',
          '& .MuiDataGrid-columnHeaders': {
            color: '#D2D2D2',
            fontSize: '12px',
          },
          '& .MuiDataGrid-columnHeader': {
            '&:focus, &:focus-within': {
              outline: 'none',
            },
          },
          '& .MuiDataGrid-topContainer': {
            backgroundColor: '#686868',
          },
          '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
            outline: 'none',
          },
          '& .MuiDataGrid-cell': {
            border: 'none',
            '&:focus, &:focus-within': {
              outline: 'none',
            },
          },
          '& .MuiDataGrid-row': {
            borderBottom: 'none',
            backgroundColor: '#444750',
            '&:hover': {
              backgroundColor: '#4E515A',
            },
            '&.Mui-selected': {
              background: '#5095C9',
              outline: 'white',
              '&:hover': {
                background: '#5095C9',
              },
            },
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
