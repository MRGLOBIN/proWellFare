import { useState } from 'react'

import Button from '@mui/material/Button'

import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { FilterList } from '@mui/icons-material'

// TODO:
// move to another file
export const ColumnFilterDataGrid = (
  columnName: string,
  filterableValues: any,
  search: boolean
) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [filterValues, setFilterValues] = useState<{ [key: string]: boolean }>({
    ...filterableValues,
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
      <strong className='mr-3'>{columnName}</strong>
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
              display: 'flex',
              flexDirection: 'column',
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
        {search && (
          <div className='mt-4 mb-2'>
            <SearchIcon className='ml-4 mr-2' />
            <input
              type='text'
              className='border-0 text-white bg-[#2A2D38] focus:border-0 focus:outline-0'
              placeholder='Search...'
            />
          </div>
        )}
        <div className='flex justify-center'>
          <hr className=' w-[90%] border-[#1976d2]' />
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {Object.keys(filterValues).map(key => (
            <div key={key}>
              <MenuItem>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filterValues[key]}
                      onChange={handleFilterChange}
                      name={key}
                      sx={{ color: 'white' }}
                    />
                  }
                  label={key}
                />
              </MenuItem>
            </div>
          ))}
        </div>
        <div style={{ padding: '10px', backgroundColor: '#2A2D38' }}>
          hello world
        </div>
      </Menu>
    </div>
  )
}
