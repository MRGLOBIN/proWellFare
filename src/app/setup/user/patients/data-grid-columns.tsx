'use client'

import Image from 'next/image'

import { GridColDef } from '@mui/x-data-grid'

import { ActivationStatus } from '@/app/types/data-grid-rows/patients.type'

import { GridRenderCellParams } from '@mui/x-data-grid'
import { ColumnFilterDataGrid } from '@/app/components/filter-column-data-grid/'

import { FilterList } from '@mui/icons-material'

const rpmStatusCellRender = ({
  row: { rpmStatus },
}: {
  row: { rpmStatus: keyof typeof ActivationStatus }
}) => {
  const status = ActivationStatus[rpmStatus]
  const backgroundColor =
    statusCellBackgroundColourMapping[status] || 'bg-black'

  return (
    <span
      className={`${backgroundColor} leading-[30px] w-4/5 rounded-3xl flex justify-center`}
    >
      {status}
    </span>
  )
}

// TODO: color for some properties are not assigned
const statusCellBackgroundColourMapping = {
  Referred: 'bg-[#6C727F]',
  Terminated: 'bg-[#DE5243]',
  'Device Assigned': 'bg-[#347659]',
  Active: 'bg-[#1BAD57]',
  Inactive: 'bg-[#DF7A35]',
  'Training Scheduled': 'bg-purple-500',
  'Did Not Answer': 'bg-orange-500',
  Accepted: 'bg-teal-500',
  Declined: 'bg-pink-500',
  'Insurance verified': 'bg-[#48A2E6]',
}

const CommentCellRenderer = (params: GridRenderCellParams) => {
  if (params.row.comments.length === 0) return '--'
  const { comment, employee } = params.row.comments[0]
  return (
    <div>
      <span className='text-[#B5D7E4]'>
        {employee?.user.fullName
          .split(' ')
          .map((word: string) => word[0]?.toUpperCase())
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
    '--'
  )

//TODO: Move me
const rmpColumnFilterableValues = {
  Referred: false,
  Terminated: false,
  'Device Assigned': false,
  Active: false,
  Inactive: false,
  'Training Scheduled': false,
  'Did Not Answer': false,
  Accepted: false,
  Declined: false,
  'Insurance verified': false,
}

export const gridColumns: GridColDef[] = [
  {
    field: 'flag',
    headerName: 'FLAG',
    minWidth: 55,
    flex: 0.5,
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
    minWidth: 150,
    flex: 1.5,
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
    minWidth: 200,
    flex: 2,
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
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'registerOn',
    headerName: 'Register On',
    minWidth: 100,
    flex: 100,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'activationDate',
    headerName: 'Activation Date',
    minWidth: 120,
    flex: 1.2,
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'preAuthDate',
    headerName: 'Pre Auth Date',
    minWidth: 100,
    flex: 1,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'provider',
    headerName: 'Provider',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'rpmStatus',
    minWidth: 200,
    flex: 2,
    type: 'string',
    headerClassName: 'bg-[#686868]',
    sortable: false,
    renderCell: rpmStatusCellRender,
    renderHeader: () =>
      ColumnFilterDataGrid(
        FilterList,
        'RPM Status',
        rmpColumnFilterableValues,
        true
      ),
  },
  {
    field: 'comment',
    headerName: 'COMMENTS',
    minWidth: 200,
    flex: 2.5,
    headerClassName: 'bg-[#686868]',
    renderCell: CommentCellRenderer,
  },
  {
    field: 'practice',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
    renderHeader: () =>
      ColumnFilterDataGrid(
        FilterList,
        'Practice (s)',
        rmpColumnFilterableValues,
        true
      ),
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'insuranceCompany',
    headerName: 'Insurance Company',
    minWidth: 250,
    flex: 2.5,
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
    valueGetter: (value: string) =>
      value
        ? value
            .split('_')
            .map(
              word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(' ')
        : '--',
    headerClassName: 'bg-[#686868]',
  },
  {
    field: 'copayAmount',
    headerName: 'Copay Amount($)',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
    valueGetter: value => {
      if (!value) {
        return '--'
      }
      return value
    },
    headerClassName: 'bg-[#686868]',
  },
]

//  return (
//         <div className='flex items-center'>
//           <strong className='mx-2'>RPM Status</strong> <FilterListIcon />
//         </div>
