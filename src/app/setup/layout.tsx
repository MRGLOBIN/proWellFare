import AnnouncementIcon from '@mui/icons-material/Announcement'
import { SetupHeader, SetupNav } from '../components/setup-top'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#181B26] text-[#BABBBE] w-screen h-screen flex flex-col'>
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
      <footer>hello world</footer>
    </div>
  )
}

export default Layout
