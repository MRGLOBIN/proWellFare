'use client'

import Image from 'next/image'

import { GridColDef } from '@mui/x-data-grid'

import { ActivationStatus } from '@/app/types/data-grid-rows/patients.type'

import { GridRenderCellParams } from '@mui/x-data-grid'

import Button from '@mui/material/Button'

import {
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Tooltip,
} from '@mui/material'
import { FilterList } from '@mui/icons-material'
import { SetStateAction, useState } from 'react'

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
    '--'
  )

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

// TODO:
// move to another file
const RpmStatusColumnFilter = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [filterValues, setFilterValues] = useState<{ [key: string]: boolean }>({
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
  })

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleFilterChange = (event: {
    target: { name: any; checked: any }
  }) => {
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.checked,
    })
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <strong className='mr-3'>RPM Status</strong>
      <Tooltip title='Filter'>
        <IconButton
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleClick(event)
          }
          size='small'
        >
          <FilterList />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              height: '250px',
              backgroundColor: '#2A2D38',
              color: 'white',
            },
          },
        }}
      >
        <div className='ml-3 mt-1'>
          <Button
            variant='outlined'
            size='small'
            className='mr-3'
            sx={{
              textTransform: 'none',
              fontWeight: 900,
              borderColor: '#444750',
            }}
          >
            Select all
          </Button>
          <Button
            variant='outlined'
            size='small'
            sx={{
              textTransform: 'none',
              fontWeight: 900,
              borderColor: '#444750',
            }}
          >
            Clear
          </Button>
        </div>
        <div className='flex justify-center'>
          <hr className='mt-2 w-[90%] border-[#1976d2]' />
        </div>
        {Object.keys(filterValues).map(key => (
          <MenuItem key={key}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterValues[key]}
                  onChange={handleFilterChange}
                  name={key}
                  sx={{ color: 'white', fontSize: '12px' }}
                />
              }
              label={key}
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export const gridColumns: GridColDef[] = [
  {
    field: 'flag',
    headerName: 'FLAG',
    minWidth: 50,
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
    headerName: 'RPM Status',
    minWidth: 200,
    flex: 2,
    type: 'string',
    headerClassName: 'bg-[#686868]',
    sortable: false,
    renderCell: rpmStatusCellRender,
    renderHeader: RpmStatusColumnFilter,
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
    headerName: 'Practice (s) ',
    minWidth: 150,
    flex: 1.5,
    type: 'string',
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
    valueGetter: value => (value ? value : '--'),
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
