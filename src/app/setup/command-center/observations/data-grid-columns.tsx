import { ColumnFilterDataGrid } from '@/app/components/filter-column-data-grid'
import { GridCellParams, GridColDef } from '@mui/x-data-grid'

import { FilterList } from '@mui/icons-material'
import {
  PatientStatusColors,
  readingColorStatus,
} from '@/app/components/observation-card/Observation-card.component'

type ReadingColorStatusKeys = keyof typeof readingColorStatus

const StatusCellRender = (params: GridCellParams) => {
  return (
    <div
      className={`w-2 h-[90%] ${
        PatientStatusColors[params.value as keyof typeof PatientStatusColors]
      }`}
    ></div>
  )
}

const ResultCellRender = (params: GridCellParams) => {
  const { value } = params
  console.log(value)
  return (
    <div className='flex flex-wrap text-xs'>
      {(value as any[]).map((orderable, index) => (
        <div key={index}>
          {index === 0 ? '' : <span>&nbsp;|&nbsp;</span>}
          <span>{orderable.name}</span>
          &nbsp;
          <span
            className={`${
              readingColorStatus[orderable.status as ReadingColorStatusKeys]
            }`}
          >
            {orderable.numbericValue}
          </span>
          &nbsp;
          <span>{orderable?.unit}</span>
        </div>
      ))}
    </div>
  )
}

export const observationGridColumns: GridColDef[] = [
  {
    field: ' ',
    headerName: '',
    minWidth: 50,
    flex: 0.5,
    type: 'boolean',
    renderCell: StatusCellRender,
  },
  {
    field: 'patients',
    headerName: 'PATIENTS',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
  },
  {
    field: 'reg',
    headerName: 'REG #',
    minWidth: 100,
    flex: 1,
    type: 'string',
  },
  {
    field: 'practice',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
    renderHeader: () =>
      ColumnFilterDataGrid(FilterList, 'Practice (s)', {}, true),
  },
  {
    field: 'vital',
    minWidth: 200,
    flex: 2,
    type: 'string',
    renderHeader: () => ColumnFilterDataGrid(FilterList, 'Vitals', {}, true),
  },
  {
    field: 'dateAndTime',
    headerName: 'DATE & TIME',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
  },
  {
    field: 'results',
    headerName: 'Results',
    minWidth: 300,
    flex: 3,
    renderCell: ResultCellRender,
  },
  {
    field: 'status',
    headerName: 'STATUS',
    minWidth: 250,
    flex: 1.5,
    type: 'string',
  },
]
