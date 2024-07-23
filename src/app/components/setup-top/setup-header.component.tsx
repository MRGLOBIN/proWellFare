import Image from 'next/image'

import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GroupsIcon from '@mui/icons-material/Groups'

const SetupHeader = () => {
  return (
    <header className='flex justify-between w-full shadow-2xl drop-shadow-2xl'>
      <div className='border border-b-0 border-[#1E2933] pt-1 px-4 flex items-center'>
        <Image
          width={120}
          height={28}
          src='/images/wellpro.svg'
          alt='pro active logo'
        />
      </div>
      <div className='flex'>
        <div className='border border-b-0 border-[#1E2933] pt-1 px-4 flex items-center'>
          <GroupsIcon />
        </div>
        <div className='border border-b-0 border-[#1E2933] pt-1 px-4 flex items-center'>
          <MailOutlineIcon />
        </div>
        <div className='border border-b-0 border-[#1E2933] pt-1 px-4 flex justify-center items-center'>
          <Image
            src={'/images/avatar.jpg'}
            alt='User Image'
            height={30}
            width={35}
            className='rounded-3xl mx-2'
          />
          <p className='text-xs text font-bold mx-2'>First Name</p>
        </div>
      </div>
    </header>
  )
}

export default SetupHeader
