import InventoryIcon from '@mui/icons-material/Inventory'
import AddIcon from '@mui/icons-material/Add'
import ReplayIcon from '@mui/icons-material/Replay'
import SettingsIcon from '@mui/icons-material/Settings'

import { IconButton } from '@mui/material'

const PatientTopBar = ({
  setSearchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
      <div className='flex justify-between items-center mx-2 mt-4 py-1 rounded  bg-[#2a2c38]'>
        <div className='flex items-center'>
          <InventoryIcon fontSize='large' className='mx-2' />
          <h2 className='font-medium text-2xl mr-4'>Patients</h2>
          <input
            type='text'
            placeholder='Search...'
            onChange={e => setSearchQuery(e.target.value)}
            className='border-[#464951] border text-[#C8C8C8] bg-[#2A2D38] focus:outline-0 rounded py-1 px-2'
          />
        </div>

        <div className='flex items-center'>
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
        </div>
      </div>
    </>
  )
}

export default PatientTopBar
