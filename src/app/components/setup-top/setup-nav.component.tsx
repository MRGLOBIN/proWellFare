'use client'

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

import HoverNavList from '../setup-top-navigation/setup-top-navigation.component'

import VisibilityIcon from '@mui/icons-material/Visibility'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import EventNoteIcon from '@mui/icons-material/EventNote'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg'
import FlipIcon from '@mui/icons-material/Flip'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import GroupIcon from '@mui/icons-material/Group'

import { useState } from 'react'
import { title } from 'process'

const CommandCenter = [
  {
    icon: VisibilityIcon,
    title: 'Observations',
  },
  {
    icon: LiveTvIcon,
    title: 'Live Session',
  },
  {
    icon: EventNoteIcon,
    title: 'Home Admissions',
  },
  {
    icon: PermPhoneMsgIcon,
    title: 'Follow Up Calls',
  },
  {
    icon: FlipIcon,
    title: 'Patient App Monitoring',
  },
  {
    icon: HeadphonesIcon,
    title: 'Call Recordings',
  },
  {
    icon: AttachFileIcon,
    title: 'IGMS',
  },
  {
    icon: AttachFileIcon,
    title: 'Hand Over',
  },
]

const users = [
  {
    icon: GroupIcon,
    title: 'Practice',
  },
  {
    icon: GroupIcon,
    title: 'Employees',
  },
  {
    icon: GroupIcon,
    title: 'Patients',
  },
  {
    icon: GroupIcon,
    title: 'Support Persons',
  },
  {
    icon: GroupIcon,
    title: 'Non-Compliant Patients',
  },
  {
    icon: GroupIcon,
    title: 'Home Health Agency',
  },
]

const SetupNav = () => {
  const [hoverCommandCenter, setHoverCommandCenter] = useState(false)
  const [hoverUsers, setHoverUsers] = useState(false)

  const handleMouseEnter = (
    setHover: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setHover(true)
  }

  const handleMouseLeave = (
    setHover: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setHover(false)
  }

  return (
    <nav className='xl:flex justify-between px-2 py-1 mt-2 bg-[#363A47] text-white text-sm w-screen hidden '>
      <div
        className='flex items-center'
        onMouseEnter={() => handleMouseEnter(setHoverCommandCenter)}
        onMouseLeave={() => handleMouseLeave(setHoverCommandCenter)}
      >
        {hoverCommandCenter && (
          <div className='relative'>
            <HoverNavList menuList={CommandCenter} />
          </div>
        )}
        <DashboardIcon className='text-xl mr-[6px]' />
        <span>Command Center</span>
      </div>
      <div className='flex items-center'>
        <MessageIcon className='text-xl mr-[6px]' />
        <span>Messages</span>
      </div>
      <div
        className='flex items-center'
        onMouseEnter={() => handleMouseEnter(setHoverUsers)}
        onMouseLeave={() => handleMouseLeave(setHoverUsers)}
      >
        {hoverUsers && (
          <div className='relative'>
            <HoverNavList menuList={users} />
          </div>
        )}
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
