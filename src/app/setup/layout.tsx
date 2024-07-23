import AnnouncementIcon from '@mui/icons-material/Announcement'
import { SetupHeader, SetupNav } from '../components/setup-top'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#181B26] text-[#BABBBE] h-screen flex flex-col'>
      <SetupHeader />
      <SetupNav />
      {/* need to move this layout to bulk sms */}
      {/* <section>
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
      </section> */}
      <main className='flex-1'>{children}</main>
      <footer className='flex items-center mb-2 ml-4 text-white font-bold text-[13px]'>
        <p>Session will expire in</p>
        <span className='mx-1'>30:29</span>
        <div className='flex justify-between w-12 mx-2'>
          <div className='w-5 h-5 rounded-3xl bg-green-500' />
          <div className='w-5 h-5 rounded-3xl bg-yellow-500' />
        </div>
      </footer>
    </div>
  )
}

export default Layout
