'use client'

import {
  IGridRowsData,
  initialPaginationModel,
  IPaginationModel,
} from '@/app/setup/user/patients/page'
import { CustomisedDataGrid } from '@/app/ui/custom-components'
import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

import { GridColDef } from '@mui/x-data-grid'
import { useState } from 'react'

const GeneralTable = ({
  columns,
  rowData,
  handlePaginationModelChange,
  paginationModel,
}: {
  columns: GridColDef[]
  rowData: IGridRowsData
  paginationModel: IPaginationModel
  handlePaginationModelChange: (newPaginationModel: IPaginationModel) => void
}) => {
  return (
    <div className='min-w-[100vw]  max-h-[90%] min-h-[83%] h-1'>
      <CustomisedDataGrid
        columns={columns}
        rows={rowData?.records}
        paginationMode='server'
        rowCount={rowData.count}
        disableEval
        disableColumnMenu
        disableColumnResize
        checkboxSelection
        disableColumnSorting
        columnHeaderHeight={40}
        // rowHeight={200}
        getRowClassName={params => {
          return params.indexRelativeToCurrentPage % 2 === 0
            ? 'bg-[#444750]'
            : 'bg-[#2a2d38]'
        }}
        getRowSpacing={param => ({
          top: param.isFirstVisible ? 2 : 0,
          bottom: param.isLastVisible ? 2 : 0,
        })}
        className='m-4 bg-[#2A2D38] text-white text-[13px]'
        pageSizeOptions={[30, 50, 100]}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        initialState={{
          pagination: { paginationModel: { pageSize: 30, page: 0 } },
        }}
        slots={{
          toolbar: customToolBar,
        }}
      />
    </div>
  )
}

export default GeneralTable

const customToolBar = () => (
  <GridToolbarContainer sx={{ color: 'white' }}>
    <GridToolbarExport />
  </GridToolbarContainer>
)
