'use client'

import React from 'react'

import { CustomisedDataGrid } from '@/app/ui/custom-components'

import { IGridRowDef } from '@/app/types/data-grid-rows/bulkSms.type'
import { gridColumns } from '@/app/setup/announcements/bulk-sms/data-grid-columns'
import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

const ExampleRows: IGridRowDef[] = [
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
  {
    id: 3,
    sr: 'asqwe',
    sender: 'rwe',
    sendon: 'nbm',
    conditions: 'kiu',
    aux: 'fedrf',
    pratice: 'lkzxcmk',
  },
]

const customToolBar = () => (
  <GridToolbarContainer sx={{ color: 'white' }}>
    <GridToolbarExport />
  </GridToolbarContainer>
)

const DataGridExample = () => {
  return (
    <div className='w-full min-w-[100vw]  max-h-[90%] min-h-[83%] h-1'>
      <CustomisedDataGrid
        rows={ExampleRows}
        columns={gridColumns}
        columnHeaderHeight={40}
        disableColumnResize
        disableEval
        rowHeight={40}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        className='m-4 bg-[#2A2D38]'
        getRowSpacing={param => ({
          top: 0,
          bottom: 0,
        })}
        slots={{
          toolbar: customToolBar,
        }}
      />
    </div>
  )
}

export default DataGridExample

// extra props for data grid
// disableColumnMenu
// disableColumnSelector
// disableColumnSorting
// disableDensitySelector
// disableMultipleRowSelection
// disableRowSelectionOnClick
