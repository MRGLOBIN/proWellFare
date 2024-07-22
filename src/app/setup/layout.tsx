import Image from 'next/image'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GroupsIcon from '@mui/icons-material/Groups'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#181B26]'>
      <header className='flex w-full'>
        <div className='border border-b-0 p-2 '>
          <Image
            width={120}
            height={28}
            src='/images/wellpro.svg'
            alt='pro active logo'
          />
        </div>
        <div className='w-[55%]' />
        <div className='border border-b-0 p-2'>
          <GroupsIcon />
        </div>
        <MailOutlineIcon />
        <div>
          <Image
            src={'/images/avatar.jpg'}
            alt='User Image'
            height={30}
            width={40}
            className='rounded-3xl'
          />
          <p className='text-xs text font-bold'>First Name</p>
        </div>
      </header>
      {children}
    </div>
  )
}

export default Layout
