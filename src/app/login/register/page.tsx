'use client'

import { useState } from 'react'

import {
  CustomButton,
  CustomNumberField,
  CustomOtpField,
} from '@/app/ui/custom-components'
import { NineMp } from '@mui/icons-material'

const Register = () => {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [isConfirmedNumber, setIsconfirmedNumer] = useState(false)

  const handleConfirmNumer = () => {
    setIsconfirmedNumer(!isConfirmedNumber)
  }

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) {
      console.log('value', value)
      return
    }
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Automatically focus the next input
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`)?.focus()
    }

    //TODO: request the data
    // Check if all inputs are filled
    if (newOtp.every(digit => digit !== '')) {
      console.log('hello')
    }
  }

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    console.log('backspace')
    if (event.key === 'Backspace' && !otp[index]) {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`)?.focus()
      }
    }
  }

  return (
    <div className='w-full h-full'>
      {!isConfirmedNumber && (
        <>
          <form className='w-full mb-10'>
            <div className='flex flex-col w-full'>
              <CustomNumberField
                label='Phone Number'
                variant='outlined'
                fullWidth
                type='number'
              />
            </div>
          </form>
          <div className='flex items-center justify-end'>
            <CustomButton
              variant='contained'
              sx={{ fontSize: '12px' }}
              onClick={handleConfirmNumer}
            >
              <strong>Confirm</strong>
            </CustomButton>
          </div>
        </>
      )}

      {isConfirmedNumber && (
        <div className='flex justify-center items-center flex-col'>
          <div>
            <h1 className='text-3xl my-2 pb-2'>Enter verification code</h1>
          </div>
          <div>
            {otp.map((data, index) => (
              <CustomOtpField
                key={index}
                id={`otp-input-${index}`}
                value={data}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: 'center' },
                  autoComplete: 'off',
                }}
                variant='outlined'
              />
            ))}
          </div>
          <div className='flex justify-between w-full mt-12 text-sm'>
            <p className='text-[#3496CE] cursor-pointer hover:underline'>
              Resend code
            </p>
            <CustomButton sx={{ fontSize: '12px' }} variant='contained'>
              <strong>Confirm</strong>
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default Register
