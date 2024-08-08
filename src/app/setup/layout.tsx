import { SetupHeader, SetupNav } from '../components/setup-top'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[#181B26] text-[#BABBBE] w-screen h-screen flex flex-col'>
      <SetupHeader />
      <SetupNav />
      <main className='flex  flex-1 flex-col w-screen'>{children}</main>
      <footer className='flex items-center pb-2 pl-3 min-h-8 text-white font-bold text-[13px] bg-[#1C1E24]'>
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
