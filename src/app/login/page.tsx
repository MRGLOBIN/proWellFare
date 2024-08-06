'use client'
import Link from 'next/link'

import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import CircularProgress from '@mui/material/CircularProgress'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { useEffect, useState } from 'react'

import { requestNotificationPermission } from './notification'

import {
  CustomButton,
  CustomTextField,
  CustomNumberField,
} from '../ui/custom-components'
import useLogin from './hooks/useLogin'

const defaultFormFields = {
  phoneNumber: '',
  password: '',
}

const body = {
  mobile: '090078601',
  password: 'Testing@1',
  enc_password: '9789KqX7LEoQgbHe/HSiqQ==.I9KhRQF1lFypGalmMsYbjg==',
  fcmToken:
    'eVKyNVwPFecsdkLkN5WXAa:APA91bFRWz6JuGyyYYN5WH06eqE1SegbG1RdzDLqC1gQVu-4c4hNAabVKpvKUo3DbCjRRKY0atxAN9jHC-9vdzXrRgnUHCBwSy2HQbclCgradsvaHLYNlQUBRegxsJ_y615GBpOPpkNc',
  deviceId: 'Mozilla',
  deviceName: 'string',
  deviceModel: 'string',
  deviceType: 'string',
  tzOffset: '18000',
}

const Page = () => {
  const [isNotification, setIsnotification] = useState(true)
  const [isTouchedField, setIsTouchedFiled] = useState([false])
  const [isVisiblePassword, setIsvisiblePassword] = useState(false)

  const [formFields, setFormFields] = useState(defaultFormFields)

  const { loginMethods } = useLogin()

  useEffect(() => {
    setIsnotification(requestNotificationPermission())
  }, [])

  const handleLogin: any = async () => {
    const url = 'https://usman-stable.cognitivehealthintl.com/rms/v1/auth/login'
    const response = await fetch(url, {
      body: JSON.stringify(body) as any,
      method: 'POST',
    })

    // console.log(response)
    // console.log('values', formFields)
  }

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleBlur = (field: number) => {
    setIsTouchedFiled(prev => ({ ...prev, [field]: true }))
  }

  const toggleIconVisibility = () => {
    setIsvisiblePassword(!isVisiblePassword)
  }

  return (
    <>
      <form className='w-full'>
        <div className='flex flex-col w-full'>
          <div className='mb-6'>
            <CustomNumberField
              name='phoneNumber'
              label='Mobile*'
              variant='outlined'
              fullWidth
              type='number'
              onChange={handleChange}
              error={isTouchedField[0] && !formFields.phoneNumber}
              // helperText={isTouchedField[0] &&  'Mobile is required'}
              inputProps={{
                autoComplete: 'off',
              }}
              onBlur={() => {
                handleBlur(0)
              }}
            />
          </div>
          <div className='mb-6'>
            <CustomTextField
              name='password'
              label='Password*'
              variant='outlined'
              fullWidth
              onChange={handleChange}
              type={isVisiblePassword ? 'text' : 'password'}
              error={isTouchedField[1] && !formFields.password}
              onBlur={() => handleBlur(1)}
              // helperText={isTouchedField[1] && 'Password is required'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={toggleIconVisibility}>
                      {isVisiblePassword ? (
                        <VisibilityIcon className='text-white' />
                      ) : (
                        <VisibilityOffIcon className='text-white' />
                      )}
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
        <div className='flex flex-col text-white'>
          <Link href={'/login/forgot-password'}>Forgot Password?</Link>
          <div className='flex justify-end mt-3 h-10'>
            <CustomButton
              onClick={loginMethods.handleLogin}
              variant='contained'
              disableElevation
              disabled={false}
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
