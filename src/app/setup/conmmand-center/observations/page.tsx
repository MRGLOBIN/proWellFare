import Image from 'next/image'

const ObservationPage = () => {
  return (
    <article className='w-full  flex flex-wrap bg-[#20222A] drop-shadow-2xl shadow-2xl text-white'>
      <section className='flex flex-grow  min-w-[200px]  bg-[#30343D] rounded-md text-xs m-2 p-2'>
        <div className='h-full w-3 rounded-tl-md rounded-bl-md bg-green-500'></div>
        <div className='flex flex-col justify-between h-full w-full mx-2 py-1'>
          <div className='flex justify-between w-full pt-1'>
            <div className='font-semibold'>
              <p>Ashan Farooq</p>
              <p>RPM-00084</p>
              <p>Medication</p>
            </div>
            <div className='pr-1 pt-1 text-[#848484] text-[10px] font-light'>
              <p className='text-ellipsis overflow-hidden max-w-12 whitespace-nowrap'>
                Medication Taken
              </p>
              <p className='text-center text-green-500 text-sm font-normal'>
                1
              </p>
            </div>
          </div>
          <div className='my-1'>
            <Image
              src='/images/Placeholder-1.svg'
              alt='condition place holder image'
              width={40}
              height={30}
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
              <span>06-24-2024</span>
              <span>2:44 PM</span>
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
      </section>
      <section className='flex flex-grow  min-w-[200px]  bg-[#30343D] rounded-md text-xs m-2 p-2'>
        <div className='h-full w-3 rounded-tl-md rounded-bl-md bg-green-500'></div>
        <div className='flex flex-col justify-between h-full w-full mx-2 py-1'>
          <div className='flex justify-between w-full pt-1'>
            <div className='font-semibold'>
              <p>Ashan Farooq</p>
              <p>RPM-00084</p>
              <p>Medication</p>
            </div>
            <div className='pr-1 pt-1 text-[#848484] text-[10px] font-light'>
              <p className='text-ellipsis overflow-hidden max-w-12 whitespace-nowrap'>
                Medication Taken
              </p>
              <p className='text-center text-green-500 text-sm font-normal'>
                1
              </p>
            </div>
          </div>
          <div className='my-1'>
            <Image
              src='/images/Placeholder-1.svg'
              alt='condition place holder image'
              width={40}
              height={30}
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
              <span>06-24-2024</span>
              <span>2:44 PM</span>
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
      </section>
    </article>
  )
}

export default ObservationPage
