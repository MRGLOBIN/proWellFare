import SearchIcon from '@mui/icons-material/Search'
import { Button, IconButton } from '@mui/material'

import Image from 'next/image'

const ObservationHeader = ({ filterCheckBoxs, handleOnPressButton }) => {
  return (
    <header className='flex items-center mx-4'>
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
                backgroundColor: filterColor.show ? filterColor.color : '',
                '&:hover': {
                  backgroundColor: filterColor.show ? filterColor.color : '',
                },
              }}
            />
          ))}
        </div>
      </section>
    </header>
  )
}

export default ObservationHeader
