import Image from 'next/image'

import Box from '@mui/material/Box'

import { roboto } from '@/app/ui/fonts'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`h-screen w-screen bg-login-background bg-cover bg-no-repeat bg-center fixed z-[-2] ${roboto.className} text-sm`}
    >
      <div className='h-full w-full bg-login-background-color z-[-1]'>
        <div className='flex justify-center items-center flex-col w-full h-full'>
          <Image
            src='/images/pro-active-logo.svg'
            alt='background image for login page'
            width={350}
            height={500}
            className='mb-8'
          />

          <div className='bg-[#1a3581] w-8/12 py-4 px-2 sm:p-8 md:p-10 rounded-md shadow-xl max-w-lg'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default layout
