import Image from 'next/image'

import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GroupsIcon from '@mui/icons-material/Groups'

import DashboardIcon from '@mui/icons-material/Dashboard'
import MessageIcon from '@mui/icons-material/Message'
import PeopleIcon from '@mui/icons-material/People'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import SettingsIcon from '@mui/icons-material/Settings'
import MovingIcon from '@mui/icons-material/Moving'
import PersonIcon from '@mui/icons-material/Person'
import PrintIcon from '@mui/icons-material/Print'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import FaxIcon from '@mui/icons-material/Fax'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import BugReportIcon from '@mui/icons-material/BugReport'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#181B26] text-[#BABBBE] '>
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
      <nav className='flex justify-between px-2 py-1 mt-2 text-sm bg-[#363A47] text-white text-sm'>
        <div className='flex items-center'>
          <DashboardIcon className='text-xl mr-[6px]' />
          <span>Command Center</span>
        </div>
        <div className='flex items-center'>
          <MessageIcon className='text-xl mr-[6px]' />
          <span>Messages</span>
        </div>
        <div className='flex items-center'>
          <PeopleIcon className='text-xl mr-[6px]' />
          <span>Users</span>
        </div>
        <div className='flex items-center'>
          <ReceiptLongIcon className='text-xl mr-[6px]' />
          <span>Reports</span>
        </div>
        <div className='flex items-center'>
          <SettingsIcon className='text-xl mr-[6px]' />
          <span>Setting</span>
        </div>
        <div className='flex items-center'>
          <MovingIcon className='text-xl mr-[6px]' />
          <span>Escalations</span>
        </div>
        <div className='flex items-center'>
          <PersonIcon className='text-xl mr-[6px]' />
          <span>Roles & Permissions</span>
        </div>
        <div className='flex items-center'>
          <PrintIcon className='text-xl mr-[6px]' />
          <span>Billing</span>
        </div>
        <div className='flex items-center'>
          <MenuBookIcon className='text-xl mr-[6px]' />
          <span>Training Material</span>
        </div>
        <div className='flex items-center'>
          <FaxIcon className='text-xl mr-[6px]' />
          <span>Fax</span>
        </div>
        <div className='flex items-center'>
          <AnnouncementIcon className='text-xl mr-[6px]' />
          <span>Announcements</span>
        </div>
        <div className='flex items-center'>
          <BugReportIcon className='text-xl mr-[6px]' />
        </div>
      </nav>
      <section>
        <div>
          <div>
            <AnnouncementIcon />
            <span>Announcements - Patients</span>
          </div>
          <div>search</div>
        </div>
        <div>
          <span>From:</span>
          date
        </div>
      </section>
      {children}
    </div>
  )
}

export default Layout
