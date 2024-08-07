'use client'

import { GeneralTable } from '@/app/components/general-table'
import useGuardianData from '@/app/setup/user/guardians/hooks/guaridan-data'
import { IPaginationModel } from '../patients/page'
import { guaridanColumn } from './data-grid-columns'
import { GeneralTableTopBar } from '@/app/components/general-table-top-bar'

const calcRowData = (data: { count: number; records: User[] }) => {
  const newData = data.records?.map((record, index: number) => ({
    id: index,
    fullName: record.user?.fullName,
    email: record.user?.email,
    mobile: record.user?.mobile,
    patients: record.patientsHospitalNumbers,
  }))

  return {
    count: data.count,
    records: newData,
  }
}

const GuardianPage = () => {
  const { guardianMethods } = useGuardianData()

  return (
    <>
      <GeneralTableTopBar
        title='Support Persons'
        isTitleIcon
        isSearchField
        isAddIcon
        isRefreshIcon
        setSearchQuery={guardianMethods.setSearchQuery}
      />
      <GeneralTable
        paginationModel={guardianMethods.paginationModel}
        rowData={calcRowData(guardianMethods.guardianData)}
        columns={guaridanColumn}
        setPaginationModel={guardianMethods.setPaginationModel}
      />
    </>
  )
}

export default GuardianPage

export interface User {
  id?: string
  user?: {
    fullName: string
    email: string
    mobile: string
    roleType: string
    birthDate: string
    birthDateString: string
  }
  patientsHospitalNumbers: string[]
  patients: string
}
