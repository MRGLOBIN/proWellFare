import { ColumnFilterDataGrid } from '@/app/components/filter-column-data-grid'
import { GridColDef } from '@mui/x-data-grid'

import { FilterList } from '@mui/icons-material'

const StatusCellRender = () => {
  return <div className={`w-2 h-[90%] bg-green-500`}></div>
}

export const observationGridColumns: GridColDef[] = [
  {
    field: '',
    headerName: '',
    minWidth: 40,
    flex: 0.4,
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
    headerName: 'PATIENTS',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
  },
  {
    field: 'results',
    headerName: 'Results',
    minWidth: 250,
    flex: 2.5,
  },
  {
    field: 'status',
    headerName: 'STATUS',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
  },
]
