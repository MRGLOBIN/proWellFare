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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import ReceiptIcon from '@mui/icons-material/Receipt'

import { useState } from 'react'

const CommandCenter = [
  {
    icon: VisibilityIcon,
    title: 'Observations',
    link: '/setup/conmmand-center/observations',
  },
  {
    icon: LiveTvIcon,
    title: 'Live Session',
    link: 'setup/conmmand-center/session-list',
  },
  {
    icon: EventNoteIcon,
    title: 'Home Admissions',
    link: '/setup/conmmand-center/admission',
  },
  {
    icon: PermPhoneMsgIcon,
    title: 'Follow Up Calls',
    link: '/setup/conmmand-center/follow-up-schedule',
  },
  {
    icon: FlipIcon,
    title: 'Patient App Monitoring',
    link: '/setup/conmmand-center/app-moniture-list',
  },
  {
    icon: HeadphonesIcon,
    title: 'Call Recordings',
    link: '/setup/conmmand-center/call-recordings',
  },
  {
    icon: AttachFileIcon,
    title: 'IGMS',
    link: '/setup/conmmand-center/igms',
  },
  {
    icon: AttachFileIcon,
    title: 'Hand Over',
    link: '/setup/conmmand-center/hand-over',
  },
]

const users = [
  {
    icon: GroupIcon,
    title: 'Practice',
    link: '/setup/user/facility',
  },
  {
    icon: GroupIcon,
    title: 'Employees',
    link: '/setup/user/employees',
  },
  {
    icon: GroupIcon,
    title: 'Patients',
    link: '/setup/user/patients',
  },
  {
    icon: GroupIcon,
    title: 'Support Persons',
    link: '/setup/user/guardians',
  },
  {
    icon: GroupIcon,
    title: 'Non-Compliant Patients',
    link: '/setup/user/non-comp-patients',
  },
  {
    icon: GroupIcon,
    title: 'Home Health Agency',
    link: '/setup/user/homeHealthAgency',
  },
]

const reports = [
  {
    icon: ReceiptLongIcon,
    title: 'Audit Logs',
    link: '/setup/reports/auditLogs',
  },
  {
    icon: AttachFileIcon,
    title: 'Call Logs',
    link: '/setup/reports/callLogs',
  },
  {
    icon: AttachFileIcon,
    title: 'Communication Logs',
    link: '/setup/reports/communicationLogs',
  },
  {
    icon: ReceiptLongIcon,
    title: 'Billable Events Reprots',
    link: '/setup/reports/billableEventsReport',
  },
  {
    icon: ReceiptLongIcon,
    title: 'Patients Monthly Dashboard',
    link: '/setup/reports/patient-monthly-report',
  },
  {
    icon: ReceiptLongIcon,
    title: 'Patients Progress Dashboard',
    link: '/patient-progress-dashboard',
  },
  {
    icon: ReceiptLongIcon,
    title: 'Last 24 Hr Report',
    link: '/setup/reports/last24HrReport',
  },
  {
    icon: ReceiptLongIcon,
    title: 'Montly Report',
    link: '/setup/reports/monthlyReport',
  },
  {
    icon: ReceiptLongIcon,
    title: 'Patient Status Dashboard',
    link: '/setup/reports/patient-status-dashboard',
  },
]

const settings = [
  {
    icon: SettingsIcon,
    title: 'Master Settings',
    link: '/setup/settings/master-settings',
  },
  {
    icon: SettingsIcon,
    title: 'User Settings',
    link: '/setup/settings/user-settings',
  },
]

const billing = [
  {
    icon: EventNoteIcon,
    title: 'Patient Billing',
    link: '/setup/billing/patient',
  },
  {
    icon: EventNoteIcon,
    title: 'Practice Billing',
    link: '/setup/billing/practice',
  },
  {
    icon: MonetizationOnIcon,
    title: 'Financials',
    link: '/setup/financials',
  },
  {
    icon: ReceiptIcon,
    title: 'Invoice Payment Status',
    link: '/setup/invoice-payment-status',
  },
  {
    icon: ReceiptIcon,
    title: 'Home Health Agency Billing',
    link: '/setup/billing/home-agency-billing',
  },
]

const announcements = [
  {
    icon: AnnouncementIcon,
    title: 'Patients',
    link: '/setup/announcements/patient',
  },
  {
    icon: AnnouncementIcon,
    title: 'Practice',
    link: '/setup/announcements/practice',
  },
]

const SetupNav = () => {
  const [selected, setSelected] = useState('Observations')

  const [hoverCommandCenter, setHoverCommandCenter] = useState(false)
  const [hoverUsers, setHoverUsers] = useState(false)
  const [hoverReports, setHoverReports] = useState(false)
  const [hoverSetting, setHoverSetting] = useState(false)
  const [hoverBilling, setHoverBilling] = useState(false)
  const [hoverAnnouncement, setHoverAnnoncement] = useState(false)

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
            <HoverNavList
              menuList={CommandCenter}
              selected={selected}
              setSelected={setSelected}
            />
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
            <HoverNavList
              menuList={users}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        )}
        <PeopleIcon className='text-xl mr-[6px]' />
        <span>Users</span>
      </div>
      <div
        className='flex items-center'
        onMouseEnter={() => handleMouseEnter(setHoverReports)}
        onMouseLeave={() => handleMouseLeave(setHoverReports)}
      >
        {hoverReports && (
          <div className='relative'>
            <HoverNavList
              menuList={reports}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        )}
        <ReceiptLongIcon className='text-xl mr-[6px]' />
        <span>Reports</span>
      </div>
      <div
        className='flex items-center'
        onMouseEnter={() => handleMouseEnter(setHoverSetting)}
        onMouseLeave={() => handleMouseLeave(setHoverSetting)}
      >
        {hoverSetting && (
          <div className='relative'>
            <HoverNavList
              menuList={settings}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        )}
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
      <div
        className='flex items-center'
        onMouseEnter={() => handleMouseEnter(setHoverBilling)}
        onMouseLeave={() => handleMouseLeave(setHoverBilling)}
      >
        {hoverBilling && (
          <div className='relative'>
            <HoverNavList
              menuList={billing}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        )}
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
      <div
        className='flex items-center'
        onMouseEnter={() => handleMouseEnter(setHoverAnnoncement)}
        onMouseLeave={() => handleMouseLeave(setHoverAnnoncement)}
      >
        {hoverAnnouncement && (
          <div className='relative'>
            <HoverNavList
              menuList={announcements}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        )}
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
