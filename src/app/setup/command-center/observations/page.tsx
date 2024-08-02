'use client'
import useObervationData from '../hooks/observation-data'
import { useEffect, useState } from 'react'
import { Paginator } from '@/app/ui/custom-components'

import { ObservationHeader } from '@/app/components/observation-header'

import ObservationTable from '@/app/components/observation-table/observation-table.component'

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
      <div className='bg-[#252831] p-2 flex flex-col h-full justify-between'>
        <ObservationHeader
          filterCheckBoxs={filterCheckBoxs}
          handleOnPressButton={handleOnPressButton}
        />
        <ObservationTable observationData={observationData} />
        <Paginator
          count={observationData?.count || 0}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[30, 50, 100, 500]}
        />
      </div>
    </>
  )
}

export default ObservationPage
