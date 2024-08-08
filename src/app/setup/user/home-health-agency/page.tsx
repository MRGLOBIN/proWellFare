'use client'

import { GeneralTable } from '@/app/components/generalTable/general-table-body'
import useHomeHealthAgencyData from '@/app/setup/user/home-health-agency/hooks/home-health-agency-data'
import { IPaginationModel } from '../patients/page'
import { homeHealthAgencyColumns } from './data-grid-columns'
import { GeneralTableTopBar } from '@/app/components/generalTable/general-table-top-bar'

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

  return (
    <>
      <GeneralTableTopBar
        title='Home Health Agency'
        isTitleIcon
        isSearchField
        isAddIcon
        isRefreshIcon
        setSearchQuery={homeHealthAgencyMethods.setSearchQuery}
      />
      <GeneralTable
        paginationModel={homeHealthAgencyMethods.paginationModel}
        rowData={calcRowData(homeHealthAgencyMethods.HomeHealthAgencyData)}
        columns={homeHealthAgencyColumns}
        setPaginationModel={homeHealthAgencyMethods.setPaginationModel}
      />
    </>
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
