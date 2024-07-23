import { GridColDef } from '@mui/x-data-grid'

export const gridColumns: GridColDef[] = [
  {
    field: 'sr',
    headerName: 'SR',
    minWidth: 100,
    flex: 1,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
  {
    field: 'sender',
    headerName: 'Sender',
    minWidth: 150,
    flex: 2,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
  {
    field: 'sendon',
    headerName: 'Send On',
    minWidth: 200,
    flex: 2,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
  {
    field: 'conditions',
    headerName: 'Conditions',
    minWidth: 200,
    flex: 3,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
  {
    field: 'aux',
    headerName: 'Auxilary Minutes',
    minWidth: 200,
    flex: 3,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
  {
    field: 'pratice',
    headerName: 'NO. OF PRACTICE',
    minWidth: 150,
    flex: 3,
    headerClassName: 'bg-[#686868]',
    // headerAlign: 'center',
  },
]
