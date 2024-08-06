'use client'

import { GeneralTable } from '@/app/components/general-table'
import useGuardianData from '@/app/setup/user/guardians/hooks/guaridan-data'
import { IPaginationModel } from '../patients/page'
import { guaridanColumn } from './data-grid-columns'

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
  const { employeeMethods } = useGuardianData()

  const handlePaginationModelChange = (
    newPaginationModel: IPaginationModel
  ) => {
    employeeMethods.setPaginationModel(newPaginationModel)
  }

  return (
    <div className='h-full'>
      <GeneralTable
        paginationModel={employeeMethods.paginationModel}
        rowData={calcRowData(employeeMethods.guardianData)}
        columns={guaridanColumn}
        handlePaginationModelChange={handlePaginationModelChange}
      />
    </div>
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
