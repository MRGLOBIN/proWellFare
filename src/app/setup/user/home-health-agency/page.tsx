'use client'

import { GeneralTable } from '@/app/components/general-table'
import useHomeHealthAgencyData from '@/app/setup/user/home-health-agency/hooks/home-health-agency-data'
import { IPaginationModel } from '../patients/page'
import { homeHealthAgencyColumns } from './data-grid-columns'

const calcRowData = (data: { count: number; records: IHomeHealthAgency[] }) => {
  const newData = data.records?.map((record, index: number) => ({
    id: index,
    agencyname: record.name,
    phone: record.phoneNo,
    email: record.email,
    city: record.city,
    state: record.state,
  }))

  return {
    count: data.count,
    records: newData,
  }
}

const HomeHealthAgencyPage = () => {
  const { homeHealthAgencyMethods } = useHomeHealthAgencyData()

  const handlePaginationModelChange = (
    newPaginationModel: IPaginationModel
  ) => {
    homeHealthAgencyMethods.setPaginationModel(newPaginationModel)
  }

  return (
    <div className='h-full'>
      <GeneralTable
        paginationModel={homeHealthAgencyMethods.paginationModel}
        rowData={calcRowData(homeHealthAgencyMethods.HomeHealthAgencyData)}
        columns={homeHealthAgencyColumns}
        handlePaginationModelChange={handlePaginationModelChange}
      />
    </div>
  )
}

export default HomeHealthAgencyPage

export interface IHomeHealthAgency {
  homeHealthAgencyId: string
  name: string
  phoneNo: string
  email: string
  faxNo: string
  address: string
  city: string
  postalCode: string
  state: string
  dateCreated: number
  dateUpdated: number
}
