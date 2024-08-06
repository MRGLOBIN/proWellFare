import { GridColDef } from '@mui/x-data-grid'

export const guaridanColumn: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'Full Name',
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 200,
    flex: 2,
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    minWidth: 150,
    flex: 1.5,
  },
  {
    field: 'patients',
    headerName: 'Patients',
    minWidth: 500,
    flex: 5,
  },
]
