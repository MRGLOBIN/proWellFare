import { useState } from 'react'

import { CustomButton, CustomNumberField } from '@/app/ui/custom-components'

const PhoneNumber = ({
  handleConfirmNumer,
  handleChangePhone,
}: {
  handleConfirmNumer: () => void
  handleChangePhone: (event: { target: { value: any } }) => void
}) => {
  const [isTouchedField, setIsTouchedFiled] = useState([false])

  const handleBlur = (field: number) => {
    setIsTouchedFiled(prev => ({ ...prev, [field]: true }))
  }

  return (
    <>
      <form className='w-full mb-10'>
        <div className='flex flex-col w-full'>
          <CustomNumberField
            label='Phone Number'
            variant='outlined'
            type='number'
            fullWidth
            onChange={handleChangePhone}
            error={isTouchedField[1]}
            onBlur={() => handleBlur(1)}
            helperText={isTouchedField[1] && 'Phone Number is required'}
            inputProps={{
              autoComplete: 'off',
            }}
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
  )
}

export default PhoneNumber
