import { ColumnFilterDataGrid } from '@/app/components/filter-column-data-grid'
import { FilterList } from '@mui/icons-material'
import { GridColDef } from '@mui/x-data-grid'
import { rpmStatusCellRender } from '../patients/data-grid-columns'

export const nonCompPatientColumns: GridColDef[] = [
  {
    field: 'patients',
    headerName: 'Patients',
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'regNo',
    headerName: 'Reg. No',
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'phone',
    headerName: 'Phone NO.',
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'practice',
    headerName: 'Practice',
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'daysFromLastReading',
    headerName: 'Days From Last Reading',
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'daysToTerminate',
    headerName: 'Days to Treminate',
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'rpmStatus',
    renderHeader: () =>
      ColumnFilterDataGrid(FilterList, 'RPM Status', {}, false),
    renderCell: rpmStatusCellRender,
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'commumicationStatus',
    headerName: 'Communication Status',
    minWidth: 350,
    flex: 3.5,
  },
  {
    field: 'deviceStatus',
    renderHeader: () =>
      ColumnFilterDataGrid(FilterList, 'Device Status', {}, false),
    minWidth: 200,
    flex: 2,
  },
]
