'use client'

import { GeneralTable } from '@/app/components/general-table'
import useFacilityData from '@/app/setup/user/facility/hooks/facility-data'
import { IPaginationModel } from '../patients/page'
import { employeesColumn } from './data-grid-columns'
import useEmployeeData from './hooks/employees-data'
import { GeneralTableTopBar } from '@/app/components/general-table-top-bar'
import { DialogueModal } from '@/app/components/dialogue-modal'

// TODO: move this funciton
const replaceUnderScore = (value: string | null | undefined) => {
  if (Array.isArray(value)) {
    value = value.join(' ')
  }
  return value ? value.replace(/_/g, ' ') : ''
}

const calcRowData = (data: { count: number; records: User[] }) => {
  const newData = data.records?.map((record, index: number) => ({
    id: index,
    fullName: record.user?.fullName,
    role: replaceUnderScore(record.user?.roleType),
    designation:
      record.EmployeeToDesignation.length !== 0
        ? record.EmployeeToDesignation[0].designation.name
        : '--',
    email: record.user?.email,
    employeeType: record.employeeType,
    homeHealthAgency: record.homeHealthAgency?.name,
    practice: record.healthcareFacilityToEmployee.map(
      practice => practice.healthcareFacility.name
    ),
    mobile: record.user?.mobile,
    npn: record.nationalProviderNo,
    ptan: record.providerTransactionAccessNo,
  }))

  return {
    count: data.count,
    records: newData,
  }
}

const PracticePage = () => {
  const { employeeMethods } = useEmployeeData()

  return (
    <>
      <GeneralTableTopBar
        title='Employees'
        isTitleIcon
        isSearchField
        isRefreshIcon
        isAddIcon
        setSearchQuery={employeeMethods.setSearchQuery}
      />
      <GeneralTable
        paginationModel={employeeMethods.paginationModel}
        rowData={calcRowData(employeeMethods.employeeData)}
        columns={employeesColumn}
        setPaginationModel={employeeMethods.setPaginationModel}
      />
      <DialogueModal></DialogueModal>
    </>
  )
}

export default PracticePage

// TODO:move me
// these code need new home
export interface User {
  id?: string
  employeeType: keyof typeof EmployeeType
  facilities: string
  nationalProviderNo: string
  providerTransactionAccessNo: string
  user?: {
    fullName: string
    email: string
    mobile: string
    roleType: string
    birthDate: string
  }
  healthcareFacilityToEmployee: {
    healthcareFacilityId: string
    healthcareFacility: {
      name: string
    }
  }[]
  EmployeeToDesignation: EmployeeToDesignation[]
  homeHealthAgency: HomeHealthAgency
}

export const EmployeeType = {
  CHI_US: 'CHI US',
  CHI_PAK: 'CHI Pak',
  PRACTICE_EMPLOYEE: 'Practice Employee',
  AGENCY_EMPLOYEE: 'Agency Employee',
} as const

export interface EmployeeToDesignation {
  designation: Designation
}

export interface Designation {
  designationId: string
  name: string
  dateCreated: number
  dateUpdated: number
}

export interface HomeHealthAgency {
  name: string
  homeHealthAgencyId: string
}
