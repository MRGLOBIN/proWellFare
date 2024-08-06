import { ColumnFilterDataGrid } from '@/app/components/filter-column-data-grid'
import { FilterList } from '@mui/icons-material'
import { GridColDef } from '@mui/x-data-grid'

export const employeesColumn: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'Full Name',
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'role',
    headerName: 'Role',
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'designation',
    headerName: 'Designation',
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'employeeType',
    renderHeader: () =>
      ColumnFilterDataGrid(FilterList, 'Employee Type', {}, false),
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'homeHealthAgency',
    headerName: 'Home Health Agency',
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'practice',
    renderHeader: () =>
      ColumnFilterDataGrid(FilterList, 'Practice (s)', {}, true),
    minWidth: 250,
    flex: 2.5,
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'npn',
    headerName: 'NPN',
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'ptan',
    headerName: 'PTAN',
    minWidth: 150,
    flex: 1.5,
  },
]
