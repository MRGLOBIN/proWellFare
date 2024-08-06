'use client'

import { GeneralTable } from '@/app/components/general-table'
import useNonCompPatientData from '@/app/setup/user/non-comp-patients/hooks/non-comp-patients-data'
import { IPaginationModel } from '../patients/page'
import { nonCompPatientColumns } from './data-grid-columns'

const calcRowData = (data: {
  count: number
  records: NonCompliantPatients[]
}) => {
  const newData = data.records?.map((record, index: number) => ({
    id: index,
    patients: record.fullname,
    regNo: record.hospitalNo,
    phone: record.mobile,
    practice: record.healthcareFacility,
    daysFromLastReading: record.lastReadingDays,
    daysToTerminate: record.daysToTerminate,
    rpmStatus: record.patientStatus,
    commumicationStatus: record.communicationMessage,
    deviceStatus: record.deviceStatus,
  }))

  return {
    count: data.count,
    records: newData,
  }
}

const NonCompPatientPage = () => {
  const { nonCompPatientMethods } = useNonCompPatientData()

  const handlePaginationModelChange = (
    newPaginationModel: IPaginationModel
  ) => {
    nonCompPatientMethods.setPaginationModel(newPaginationModel)
  }

  return (
    <div className='h-full'>
      <GeneralTable
        paginationModel={nonCompPatientMethods.paginationModel}
        rowData={calcRowData(nonCompPatientMethods.nonCompPatientData)}
        columns={nonCompPatientColumns}
        setPaginationModel={nonCompPatientMethods.setPaginationModel}
      />
    </div>
  )
}

export default NonCompPatientPage

export interface NonCompliantPatients {
  fullname: string
  patientId: string
  mobile: string
  hospitalNo: string
  healthcareFacility: string
  patientStatus: string
  deviceStatus: string
  lastReadingDays: number
  daysToTerminate: number
  patientDiagnosis: PatientDiagnosi[]
  userId: string
  communicationMessage: string
  communicationDate: number
}

export interface PatientDiagnosi {
  icd10CodeId: string
  iCD10Code: ICd10Code
}

export interface ICd10Code {
  icd10CodeId: string
  icd10Code: string
  description: string
  parentId: string
  isLeaf: boolean
  level: number
  isDeleted: boolean
  dateCreated: number
  dateUpdated: number
}
