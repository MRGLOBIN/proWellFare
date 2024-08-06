import { GridColDef } from '@mui/x-data-grid'

export const homeHealthAgencyColumns: GridColDef[] = [
  {
    field: 'agencyName',
    headerName: 'Agency Name',
    minWidth: 250,
    flex: 2.5,
  },
  {
    field: 'phone',
    headerName: 'Phone #',
    minWidth: 250,
    flex: 2.5,
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 250,
    flex: 2.5,
  },
  {
    field: 'city',
    headerName: 'City',
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'state',
    headerName: 'State',
    minWidth: 150,
    flex: 1.5,
  },
]
