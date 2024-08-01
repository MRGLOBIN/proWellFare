import Image from 'next/image'

//TODO:
// move this interface to another file
interface IResultAbleValue {
  name: string
  numericValue: number
  resultUnit: string | null
  resultableValueId: string
  status: string
}

//TODO:
// move this function to another file
const formatDateToTime = (dateNumber: number) => {
  const timestamp = dateNumber * 1000 // Convert to milliseconds
  const date = new Date(timestamp)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }
  const formattedDate = date
    .toLocaleDateString('en-GB', options)
    .replace(/\//g, '-')

  const hours = date.getHours() % 12 || 12
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM'

  return `${formattedDate} ${hours}:${minutes} ${ampm}`
}

//TODO:
//move it to another file
const cardStatusColors = {
  WARNING: 'bg-[#FC8024]',
  NORMAL: 'bg-[#1BA64D]',
  CRITICAL: 'bg-[#F51217]',
  ABNORMAL: 'bg-[#D2D331]',
  UNKNOWN: 'bg-[#393939]',
  INVALID: 'bg-white',
}

//TODO:
//move it to another file
const readingColorStatus = {
  WARNING_HIGH: 'text-[#E17624]',
  WARNING_LOW: 'text-[#E37727]',
  NORMAL: 'text-[#1BA64D]',
  ABNORMAL_LOW: 'text-[#CBCC32]',
  ABNORMAL_HIGH: 'text-[#CECF2D]',
  CRITICAL_LOW: 'text-[#CE191E]',
}

// TODO:
// hover effect for text, dropdows diaglogue
const ObservationCard = ({
  fullName,
  hospitalNumber,
  orderableName,
  orderableIcon,
  acquisitionTime,
  resultableValues,
  colorStatus,
}: {
  fullName: string
  hospitalNumber: string
  orderableName: string
  orderableIcon: string | null
  acquisitionTime: number
  resultableValues: any
  colorStatus: 'WARNING' | 'NORMAL' | 'CRITICAL' | 'ABNORMAL'
}) => {
  return (
    <section className='flex flex-grow  min-w-[300px] bg-[#30343D] rounded-md text-xs m-2 shadow-2xl'>
      <div
        className={`h-full w-3 rounded-tl-md rounded-bl-md ${cardStatusColors[colorStatus]}`}
      />
      <div className='flex flex-col justify-between h-full  w-full mx-2 py-2 px-1'>
        <div className='flex justify-between w-full'>
          <div className='font-semibold w-[40%]'>
            <p> {fullName} </p>
            <p> {hospitalNumber} </p>
            <p>{orderableName} </p>
          </div>
          <div className='flex flex-wrap w-[60%] place-content-end mx-1'>
            {resultableValues.map((resultableValue: any) => (
              <div key={resultableValue.resultableValueId}>
                <div className='px-2 text-[#848484] text-[10px] font-light'>
                  <p className='text-ellipsis overflow-hidden max-w-12 whitespace-nowrap'>
                    {resultableValue.resultable.name}
                  </p>
                  <p
                    className={`text-center text-sm font-normal  ${
                      readingColorStatus[resultableValue.status] || 'text-white'
                    }`}
                  >
                    {resultableValue.numericValue}
                  </p>
                  <p className='text-center min-h-3'>
                    {resultableValue.resultable.resultUnit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='my-1'>
            <Image
              src={`${
                orderableIcon ? orderableIcon : '/images/Placeholder-1.svg'
              } `}
              unoptimized={true}
              alt='condition place holder image'
              width={40}
              height={30}
              className='mt-4'
            />
          </div>
          <div className='border-t border-dashed mx-[-8px] my-2' />
          <div className='flex justify-between items-center'>
            <div className='flex items-center text-[10px] font-normal'>
              <Image
                src='/images/ClockWhite.svg'
                alt='clock'
                width={20}
                height={20}
              />
              <span className='mx-1'>Acq.</span>
              <span>{formatDateToTime(acquisitionTime)}</span>

              <Image
                src='/images/ArrowRightWhite.svg'
                alt='Expand button'
                width={25}
                height={20}
              />
            </div>
            <div>
              <Image
                src='/images/MoreWhite.svg'
                alt='more options'
                width={25}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ObservationCard
