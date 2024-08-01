'use client'

import ObservationCard from '@/app/components/observation-card'

import useObervationData from '../hooks/observation-data'
import { useEffect, useState } from 'react'
import { Paginator } from '@/app/ui/custom-components'

import SearchIcon from '@mui/icons-material/Search'
import { Button, IconButton } from '@mui/material'
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt'
import ViewListIcon from '@mui/icons-material/ViewList'

import Image from 'next/image'

// TODO:
// move me
const filterCheckBoxColors = [
  {
    color: '#01b050',
    show: false,
  },
  {
    color: '#d8d800',
    show: false,
  },
  {
    color: '#ff8a00',
    show: false,
  },
  {
    color: '#fa0000',
    show: false,
  },
  {
    color: 'white',
    show: false,
  },
  {
    color: '#414141',
    show: false,
  },
]

//TODO:
//oerderable Icon and status color also numberic number status color
const ObservationPage = () => {
  const [observationData, setObservationData] = useState(null)
  const { ObservationMethods } = useObervationData()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(30)
  const [filterCheckBoxs, setFilterCheckBoxs] = useState(filterCheckBoxColors)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleOnPressButton = (index: number) => {
    const newFilterCheckBoxs = filterCheckBoxs.map((item, i) =>
      i === index ? { ...item, show: !item.show } : item
    )
    setFilterCheckBoxs(newFilterCheckBoxs)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10)
    setRowsPerPage(newRowsPerPage)
    setPage(0) // Reset to first page
  }

  useEffect(() => {
    async function getData() {
      const data = await ObservationMethods.getObservationData({
        page: page + 1,
        per_page: rowsPerPage,
      })
      setObservationData(data)
    }
    getData()
  }, [page, rowsPerPage])
  return (
    <>
      <div className='bg-[#252831] p-2'>
        <header className='flex items-center mx-4'>
          <h1 className='text-white text-xl font-semibold'>Observations</h1>
          <IconButton>
            <SearchIcon sx={{ color: 'white' }} />
          </IconButton>
          <div className='mx-2'>
            <Image
              src={'/images/StandardHighlighted.svg'}
              alt='layout change button'
              height={40}
              width={40}
            ></Image>
          </div>
          <div>
            <Image
              src='/images/ListHighlighted.svg'
              alt='layout change button'
              width={40}
              height={40}
            ></Image>
          </div>
          <div className='flex justify-between flex-1 mx-4 max-w-48'>
            {filterCheckBoxs.map((filterColor, index: number) => (
              <Button
                onClick={() => handleOnPressButton(index)}
                key={index}
                sx={{
                  border: `4px solid ${filterColor.color}`,
                  minWidth: '25px',
                  minHeight: '25px ',
                  borderRadius: '3px',
                  backgroundColor: filterColor.show ? filterColor.color : '',
                  '&:hover': {
                    backgroundColor: filterColor.show ? filterColor.color : '',
                  },
                }}
              />
            ))}
          </div>
        </header>
        <article className='w-full  flex flex-wrap text-white h-full max-h-[68vh] overflow-y-scroll'>
          {observationData?.records?.map((record: any, index: number) => (
            <ObservationCard
              key={index}
              colorStatus={record.colorStatus}
              fullName={record.patient.user.fullName}
              hospitalNumber={record.patient.hospitalNo}
              orderableName={record.orderable.name}
              orderableIcon={record.orderable.icon}
              acquisitionTime={record.acquisitionTime}
              resultableValues={record.resultableValues}
            />
          ))}
        </article>
      </div>
      <Paginator
        count={observationData?.count || 0}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[30, 50, 100, 500]}
      />
    </>
  )
}

export default ObservationPage
