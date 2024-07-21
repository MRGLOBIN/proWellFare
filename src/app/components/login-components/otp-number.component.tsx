import { CustomButton, CustomOtpField } from '@/app/ui/custom-components'

const OtpNumber = ({
  otp,
  handleChange,
  handleKeyDown,
}: {
  otp: string[]
  handleKeyDown: (
    index: number,
    event: React.KeyboardEvent<HTMLDivElement>
  ) => void
  handleChange: (index: number, value: string) => void
}) => {
  return (
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
  )
}

export default OtpNumber
