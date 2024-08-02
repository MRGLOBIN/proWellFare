import { CheckBox } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import {
  Button,
  Checkbox,
  Chip,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

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
  filterCheckBoxs,
  handleOnPressButton,
  selectedStatus,
  setSelectedStatus,
}) => {
  const handleStatusSelect = (event: any) => {
    setSelectedStatus(event.target.value)
  }
  return (
    <header className='flex items-center flex-wrap justify-between mx-4'>
      <section className='flex flex-wrap items-center'>
        <h1 className='text-white text-xl font-semibold'>Observations</h1>
        <IconButton className=''>
          <SearchIcon sx={{ color: 'white' }} />
        </IconButton>
        <div className='mx-2'>
          <Image
            src={'/images/StandardHighlighted.svg'}
            alt='layout change button'
            height={40}
            width={40}
          ></Image>
        </div>
        <div>
          <Image
            src='/images/ListHighlighted.svg'
            alt='layout change button'
            width={40}
            height={40}
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
              return 'Select an option'
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
