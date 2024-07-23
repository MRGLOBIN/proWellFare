import AnnouncementIcon from '@mui/icons-material/Announcement'

const BulkSmsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className='flex justify-between mx-4 mt-4 bg-[#686868] py-4 px-4 rounded-md'>
        <div className='flex'>
          <div className='mr-4'>
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
    </>
  )
}

export default BulkSmsLayout
