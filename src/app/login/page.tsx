'use client'
import Link from 'next/link'

import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import CircularProgress from '@mui/material/CircularProgress'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { useEffect, useState } from 'react'

import { requestNotificationPermission } from './notification'

import {
  CustomButton,
  CustomTextField,
  CustomNumberField,
} from '../ui/custom-components'

const body = {
  deviceId: 'Mozilla',
  tzOffset: '18000',
  enc_password: '9789KqX7LEoQgbHe/HSiqQ==.I9KhRQF1lFypGalmMsYbjg==',
  fcmToken:
    'eVKyNVwPFecsdkLkN5WXAa:APA91bFRWz6JuGyyYYN5WH06eqE1SegbG1RdzDLqC1gQVu-4c4hNAabVKpvKUo3DbCjRRKY0atxAN9jHC-9vdzXrRgnUHCBwSy2HQbclCgradsvaHLYNlQUBRegxsJ_y615GBpOPpkNc',
}

const Page = () => {
  const [isNotification, setIsnotification] = useState(true)

  useEffect(() => {
    setIsnotification(requestNotificationPermission())
  }, [])

  const handleLogin: any = async () => {
    const url = 'https://usman-stable.cognitivehealthintl.com/rms/v1/auth/login'
    const response = await fetch(url, {
      body: JSON.stringify(body) as any,
      method: 'POST',
    })

    console.log(response)
  }

  return (
    <>
      <form className='w-full'>
        <div className='flex flex-col w-full'>
          <div className='mb-6'>
            <CustomNumberField
              label='Mobile*'
              variant='outlined'
              fullWidth
              type='number'
            />
          </div>
          <div className='mb-6'>
            <CustomTextField
              label='Password*'
              variant='outlined'
              type='password'
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton>
                      <VisibilityIcon className='text-white' />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </form>
      <div className='block w-full h-6'></div>
      <div className='flex justify-between flex-1 w-full'>
        <div className='flex items-end mb-2 text-[#3496CE]'>
          <Link href={'/login/register'}>I&apos;m a New User</Link>
        </div>
        <div className='flex flex-col'>
          <Link href={'/login/forgot-password'}>Forgot Password?</Link>
          <div className='flex justify-end mt-3 h-10'>
            <CustomButton
              onClick={handleLogin}
              variant='contained'
              disableElevation
              disabled={isNotification}
            >
              <div
                className={`flex jsutify-between items-center gap-2 ${
                  isNotification ? 'text-white/30' : ''
                }`}
              >
                <strong>Login</strong>
                {isNotification && (
                  <CircularProgress size={'18px'} thickness={8} />
                )}
              </div>
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
