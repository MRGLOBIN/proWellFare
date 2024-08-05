'use client'

import { useState } from 'react'

import { IFilterCheckBoxeColor } from '@/app/setup/command-center/observations/page'

import SearchIcon from '@mui/icons-material/Search'
import {
  Button,
  Checkbox,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  styled,
} from '@mui/material'

import { SelectChangeEvent } from '@mui/material'

import Image from 'next/image'

const status = [
  // { value: 'Select', label: 'All escalation statuses' },
  { value: 'SEEN', label: 'Seen' },
  { value: 'UNHANDLED', label: 'Unhandled' },
  { value: 'HANDLED', label: 'Handled' },
  { value: 'INVALID', label: 'Invalid' },
  { value: 'ESCALATED_TO_RN', label: 'Escalated To Rn' },
  { value: 'ESCALATED_TO_PRACTICE', label: 'Escalated To Practice' },
  { value: 'ESCALATED_AND_HANDLED', label: 'Escalated And Handled' },
]

const ObservationHeader = ({
  gridLayout,
  setGridLayout,
  filterCheckBoxs,
  handleOnPressButton,
  selectedStatus,
  setSelectedStatus,
}: {
  gridLayout: boolean
  setGridLayout: React.Dispatch<React.SetStateAction<boolean>>
  filterCheckBoxs: IFilterCheckBoxeColor[]
  selectedStatus: string[]
  setSelectedStatus: React.Dispatch<React.SetStateAction<string[]>>
  handleOnPressButton: (index: number) => void
}) => {
  const handleLayoutChangeToGrid = () => {
    setGridLayout(true)
  }

  const handleLayoutChangeToCards = () => {
    setGridLayout(false)
  }

  const handleStatusSelect = (event: SelectChangeEvent<string[]>) => {
    setSelectedStatus(event.target.value as string[])
  }
  return (
    <header className='flex items-center flex-wrap justify-between mx-2'>
      <section className='flex flex-wrap items-center'>
        <h1 className='text-white text-2xl font-semibold'>Observations</h1>
        <SearchComponent />
        <div className='mx-2'>
          <Image
            src={`${
              gridLayout
                ? '/images/StandardNotHighlighted.svg'
                : '/images/StandardHighlighted.svg'
            }`}
            alt='layout change button'
            height={40}
            width={40}
            onClick={handleLayoutChangeToCards}
          ></Image>
        </div>
        <div>
          <Image
            src={`${
              gridLayout
                ? '/images/ListHighlighted.svg'
                : '/images/ListNotHighlighted.svg'
            }`}
            alt='layout change button'
            width={40}
            height={40}
            onClick={handleLayoutChangeToGrid}
          ></Image>
        </div>
        <div className='flex justify-between items-center flex-1 mx-4 max-w-48'>
          {filterCheckBoxs.map((filterColor, index: number) => (
            <Button
              onClick={() => handleOnPressButton(index)}
              key={index}
              sx={{
                border: `4px solid ${filterColor.color}`,
                minWidth: '25px',
                minHeight: '25px ',
                maxHeight: '25px',
                borderRadius: '3px',
                marginLeft: '4px',
                marginRight: '4px',
                backgroundColor: filterColor.show ? filterColor.color : '',
                '&:hover': {
                  backgroundColor: filterColor.show ? filterColor.color : '',
                },
              }}
            />
          ))}
        </div>
      </section>
      <div className='w-14'></div>
      <section className='flex justify-end '>
        <Select
          multiple
          value={selectedStatus}
          onChange={handleStatusSelect}
          variant='outlined'
          fullWidth
          renderValue={selected => {
            if (selected.length === 0) {
              return 'Select Status'
            }
            const labels = selected.map((value: string) => {
              const label = status.find(status => status.value === value)?.label
              return `${label},`
            })

            return labels
          }}
          displayEmpty
          sx={{
            width: {
              xs: '50px', // full width on extra-small screens
              sm: '75px', // 75% width on small screens
              md: '100px', // 50% width on medium screens
              lg: '150px', // 33% width on large screens
              xl: '100%', // 25% width on extra-large screens
            },
            maxHeight: '50px',
            maxWidth: '150px',
            color: 'rgba(255,255,255,0.5)',
            border: 'none',
            backgroundColor: 'rgb(68, 73, 87)',
            '& .MuiSelect-icon': {
              color: 'rgba(255,255,255,0.5)',
            },
          }}
        >
          {status.map(menuObject => (
            <MenuItem key={menuObject.value} value={menuObject.value}>
              <Checkbox
                checked={selectedStatus.indexOf(menuObject.value) > -1}
              />
              {menuObject.label}
            </MenuItem>
          ))}
        </Select>

        <Select
          multiple
          value={selectedStatus}
          onChange={handleStatusSelect}
          variant='outlined'
          fullWidth
          renderValue={selected => {
            if (selected.length === 0) {
              return 'Select status'
            }
            const labels = selected.map((value: string) => {
              const label = status.find(status => status.value === value)?.label
              return `${label},`
            })

            return labels
          }}
          displayEmpty
          sx={{
            maxHeight: '50px',
            width: {
              xs: '50px', // full width on extra-small screens
              sm: '75px', // 75% width on small screens
              md: '100px', // 50% width on medium screens
              lg: '150px', // 33% width on large screens
              xl: '100%', // 25% width on extra-large screens
            },
            maxWidth: '150px',
            color: 'rgba(255,255,255,0.5)',
            border: 'none',
            backgroundColor: 'rgb(68, 73, 87)',
            '& .MuiSelect-icon': {
              color: 'rgba(255,255,255,0.5)',
            },
          }}
        >
          {status.map(menuObject => (
            <MenuItem key={menuObject.value} value={menuObject.value}>
              <Checkbox
                checked={selectedStatus.indexOf(menuObject.value) > -1}
              />
              {menuObject.label}
            </MenuItem>
          ))}
        </Select>
      </section>
    </header>
  )
}

export default ObservationHeader

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

interface InputBaseProps {
  open?: boolean
}

const SearchInput = styled(InputBase)<InputBaseProps>(({ theme, open }) => ({
  width: open ? '200px' : '0px',
  transition: 'width 0.3s ease-in-out',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  backgroundColor: 'rgb(68, 73, 87)',
  color: 'white',
  fontWeight: '100',

  borderRadius: '4px',
  paddingLeft: open ? theme.spacing(1) : '0px',
  marginLeft: theme.spacing(1),
}))

const SearchButton = styled(IconButton)({
  color: 'white',
})

const SearchComponent = () => {
  const [open, setOpen] = useState(false)

  const handleSearchClick = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <SearchContainer>
      <SearchButton onClick={handleSearchClick}>
        <SearchIcon />
      </SearchButton>
      <SearchInput open={open} placeholder='Search...' />
    </SearchContainer>
  )
}
