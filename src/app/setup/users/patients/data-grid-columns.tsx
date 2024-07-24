import Image from 'next/image'

import { GridColDef } from '@mui/x-data-grid'

import { GridRenderCellParams } from '@mui/x-data-grid'

const CommentCellRenderer = (params: GridRenderCellParams) => {
  if (!params.row.comment) return
  const { comment, employee } = params.row.comment[0]
  return (
    <div>
      <span className='text-[#B5D7E4]'>
        {employee.user.fullName
          .split(' ')
          .map((word: string) => word[0].toUpperCase())
          .join('')}{' '}
        -{' '}
      </span>{' '}
      {comment}
    </div>
  )
}

const FlagCellRender = (params: GridRenderCellParams) =>
  params.value ? (
    <Image src={'/images/flag.png'} width={20} height={20} alt='data flag' />
  ) : (
    '-'
  )

export const gridColumns: GridColDef[] = [
  {
    field: 'flag',
    headerName: 'FLAG',
    minWidth: 100,
    flex: 1,
    headerClassName: 'bg-[#686868]',
    type: 'boolean',
    renderCell: FlagCellRender,
  },
  {
    field: 'patientName',
    headerName: 'Patient',
    minWidth: 200,
    flex: 2,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'careGiver',
    headerName: 'Patient Caregiver',
    minWidth: 200,
    flex: 2,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'regNo',
    headerName: 'Reg. No',
    minWidth: 100,
    flex: 1,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 250,
    flex: 2.5,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'birthDate',
    headerName: 'Birthdate',
    minWidth: 100,
    flex: 1,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'refferedOn',
    headerName: 'Reffered On',
    minWidth: 100,
    flex: 1,
    type: 'date',
    valueGetter: (params: GridRenderCellParams) => {
      if (!params?.value) return
      new Date(params.value * 1000)
    },
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'registerOn',
    headerName: 'Register On',
    minWidth: 100,
    flex: 100,
    type: 'date',
    valueGetter: (params: GridRenderCellParams) => {
      if (!params?.value) return
      new Date(params.value * 1000)
    },
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'activationDate',
    headerName: 'Activation Date',
    minWidth: 100,
    flex: 1,
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'preAuthDate',
    headerName: 'Pre Auth Date',
    minWidth: 100,
    flex: 1,
    type: 'date',
    valueGetter: (params: GridRenderCellParams) => {
      if (!params?.value) return
      new Date(params.value * 1000)
    },
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'provider',
    headerName: 'Provider',
    minWidth: 200,
    flex: 2,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'rpmStatus',
    headerName: 'RPM Status',
    minWidth: 200,
    flex: 2,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'comment',
    headerName: 'COMMENTS',
    minWidth: 200,
    flex: 3,
    headerClassName: 'bg-[#686868]',
    renderCell: CommentCellRenderer,
  },
  {
    field: 'pratice',
    headerName: 'Pratice(s)',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'insuranceCompany',
    headerName: 'Insurance Company',
    minWidth: 300,
    flex: 300,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'insurancePlan',
    headerName: 'Insurance Plan',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'insuranceStatus',
    headerName: 'Insurance Status',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'copayAmount',
    headerName: 'Copay Amount($)',
    minWidth: 200,
    flex: 2,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
]
