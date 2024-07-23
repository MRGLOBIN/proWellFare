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
import BugReportIcon from '@mui/icons-material/BugReport'
import AnnouncementIcon from '@mui/icons-material/Announcement'

const SetupNav = () => {
  return (
    <nav className='flex justify-between px-2 py-1 mt-2  bg-[#363A47] text-white text-sm'>
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
  )
}

export default SetupNav
