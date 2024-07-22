import Image from 'next/image'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GroupsIcon from '@mui/icons-material/Groups'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#181B26] text-[#BABBBE] '>
      <header className='flex justify-between w-full shadow-2xl drop-shadow-2xl'>
        <div className='border border-b-0 border-[#1E2933] pt-2 px-4 '>
          <Image
            width={120}
            height={28}
            src='/images/wellpro.svg'
            alt='pro active logo'
          />
        </div>
        <div className='flex'>
          <div className='border border-b-0 border-[#1E2933] pt-2 px-4'>
            <GroupsIcon />
          </div>
          <div className='border border-b-0 border-[#1E2933] pt-2 px-4'>
            <MailOutlineIcon />
          </div>
          <div className='border border-b-0 border-[#1E2933] pt-2 px-4 flex justify-center items-center'>
            <Image
              src={'/images/avatar.jpg'}
              alt='User Image'
              height={30}
              width={40}
              className='rounded-3xl mx-2'
            />
            <p className='text-xs text font-bold mx-2'>First Name</p>
          </div>
        </div>
      </header>
      <nav className='flex justify-between px-4 py-2 text-sm bg-[#363A47] text-white'>
        <div>
          <span>Command Center</span>
        </div>
        <div>
          <span>Messages</span>
        </div>
        <div>
          <span>Users</span>
        </div>
        <div>
          <span>Reports</span>
        </div>
        <div>
          <span>Setting</span>
        </div>
        <div>
          <span>Escalations</span>
        </div>
        <div>
          <span>Roles & Permissions</span>
        </div>
        <div>
          <span>Billing</span>
        </div>
        <div>
          <span>Training Material</span>
        </div>
        <div>
          <span>Fax</span>
        </div>
        <div>
          <span>Announcements</span>
        </div>
        <div>
          <span>bug</span>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Layout
