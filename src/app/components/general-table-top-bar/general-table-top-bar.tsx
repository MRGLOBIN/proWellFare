import InventoryIcon from '@mui/icons-material/Inventory'
import AddIcon from '@mui/icons-material/Add'
import ReplayIcon from '@mui/icons-material/Replay'
import SettingsIcon from '@mui/icons-material/Settings'

import { IconButton } from '@mui/material'

const GeneralTableTopBar = ({
  title = '',
  isTitleIcon = false,
  isSearchField = false,
  isAddIcon = false,
  isRefreshIcon = false,
  isSettingsIcon = false,
  setSearchQuery,
}: {
  title?: string
  isAddIcon?: boolean
  isTitleIcon?: boolean
  isSearchField?: boolean
  isRefreshIcon?: boolean
  isSettingsIcon?: boolean
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
      <section className='flex justify-between items-center mx-2 py-2 bg-[#2A2D38] mt-2 rounded text-white text-base'>
        <div className='flex items-center'>
          {isTitleIcon && <InventoryIcon fontSize='medium' className='mx-2' />}
          <h1 className='font-medium text-xl mr-2'>{title}</h1>
          {isSearchField && (
            <input
              type='text'
              placeholder='Search...'
              onChange={e => {
                setSearchQuery && setSearchQuery(e.target.value)
              }}
              className='border-[#464951] border text-[#C8C8C8] bg-[#2A2D38] focus:outline-0 rounded pl-3 py-1 text-sm'
            />
          )}
        </div>

        <div className='flex items-center'>
          {isAddIcon && (
            <IconButton
              sx={{
                marginRight: '0.5rem',
                backgroundColor: '#5095C9',
                borderRadius: '5px',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#64A9DD',
                },
              }}
            >
              <AddIcon />
            </IconButton>
          )}

          {isRefreshIcon && (
            <IconButton
              sx={{
                marginRight: '0.5rem',
                backgroundColor: '#5095C9',
                borderRadius: '5px',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#64A9DD',
                },
              }}
            >
              <ReplayIcon />
            </IconButton>
          )}
          {isSettingsIcon && (
            <IconButton
              sx={{
                marginRight: '0.5rem',
                backgroundColor: '#5095C9',
                borderRadius: '5px',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#64A9DD',
                },
              }}
            >
              <SettingsIcon />
            </IconButton>
          )}
        </div>
      </section>
    </>
  )
}

export default GeneralTableTopBar
