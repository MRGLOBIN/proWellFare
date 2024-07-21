'use client'

import { useState } from 'react'

import { OtpNumber, PhoneNumber } from '@/app/components/login-components'

const Register = () => {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [phoneNumber, setPhoneNumber] = useState('')

  const [isConfirmedNumber, setIsconfirmedNumer] = useState(false)

  const handleConfirmNumer = () => {
    setIsconfirmedNumer(!isConfirmedNumber)
  }

  const handleChangePhone = (event: { target: { value: string } }) => {
    setPhoneNumber(event.target.value)
    console.log(event.target.value)
  }

  const handleChangeOtp = (index: number, value: string) => {
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
      // console.log('hello')
    }
  }

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === 'Backspace' && !otp[index]) {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`)?.focus()
      }
    }
  }

  return (
    <div className='w-full h-full'>
      {!isConfirmedNumber && (
        <PhoneNumber
          handleConfirmNumer={handleConfirmNumer}
          handleChangePhone={handleChangePhone}
        />
      )}

      {isConfirmedNumber && (
        <OtpNumber
          otp={otp}
          handleChange={handleChangeOtp}
          handleKeyDown={handleKeyDown}
        />
      )}
    </div>
  )
}

export default Register
