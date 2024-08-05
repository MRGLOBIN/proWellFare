'use client'

import { GeneralTable } from '@/app/components/general-table'

import { useEffect, useMemo, useState } from 'react'

import PatientData from '@/app/setup/user/hooks/patient'

import { gridColumns } from '@/app/setup/user/patients/data-grid-columns'
import { exampleRows } from './delete-response-data'

import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import PatientTopBar from '@/app/components/user-top-bar/patient-top-bar.component'

const formatDate = (date: number | null) => {
  if (!date) {
    return '--'
  }

  const unformattedDate = new Date(date * 1000)
  return [
    ('0' + (unformattedDate.getMonth() + 1)).slice(-2), // Month (01-12)
    ('0' + unformattedDate.getDate()).slice(-2), // Day (01-31)
    unformattedDate.getFullYear(), // Year (YYYY)
  ].join('-')
}

const rowCount = exampleRows.count
const pages = exampleRows.pages

const exampleRow = exampleRows.records.map(patientData => {
  return {
    id: patientData.patientId,
    flag: patientData.flag,
    patientName: `${patientData.user.firstName} ${patientData.user.lastName}`,
    careGiver:
      patientData.caregiverFirstName || patientData.caregiverLastName
        ? `${patientData.caregiverFirstName || ''} ${
            patientData.caregiverLastName || ''
          }`.trim()
        : '--',
    regNo: patientData.hospitalNo,
    email: patientData.user.email,
    birthDate: patientData.user.birthDateString,
    mobile: patientData.user.mobile,
    refferedOn: formatDate(patientData.referralDate),
    registerOn: formatDate(patientData.dateCreated),
    activationDate: patientData.user.isActivated
      ? formatDate(patientData.user.dateCreated)
      : '--',
    preAuthDate: formatDate(patientData.preAuthorizationDate),
    provider: patientData.primaryDoctorName,
    rpmStatus: patientData.activationStatus,
    comments: patientData.CommentToPatients,
    practice: patientData.healthcareFacilityName,
    insuranceCompany: patientData.insurancePlan.insuranceCompany.name,
    insurancePlan: patientData.insurancePlan.plan,
    insuranceStatus: patientData.insuranceStatus,
    copayAmount: patientData.copayAmount,
  }
})

const calcRowsData = (data: { records: any[]; count: any }) => {
  if (!data) {
    console.log(data)
    return { count: 0, records: [] }
  }
  const newData = data.records?.map(
    (patientData: {
      patientId: any
      flag: any
      user: {
        firstName: any
        lastName: any
        email: any
        birthDateString: any
        mobile: any
        isActivated: any
        dateCreated: number | null
      }
      caregiverFirstName: any
      caregiverLastName: any
      hospitalNo: any
      referralDate: number | null
      dateCreated: number | null
      preAuthorizationDate: number | null
      primaryDoctorName: any
      activationStatus: any
      CommentToPatients: any
      healthcareFacilityName: any
      insurancePlan: { insuranceCompany: { name: any }; plan: any }
      insuranceStatus: any
      copayAmount: any
    }) => {
      return {
        id: patientData.patientId,
        flag: patientData.flag,
        patientName: `${patientData.user.firstName} ${patientData.user.lastName}`,
        careGiver:
          patientData.caregiverFirstName || patientData.caregiverLastName
            ? `${patientData.caregiverFirstName || ''} ${
                patientData.caregiverLastName || ''
              }`.trim()
            : '--',
        regNo: patientData.hospitalNo,
        email: patientData.user.email,
        birthDate: patientData.user.birthDateString,
        mobile: patientData.user.mobile,
        refferedOn: formatDate(patientData.referralDate),
        registerOn: formatDate(patientData.dateCreated),
        activationDate: patientData.user.isActivated
          ? formatDate(patientData.user.dateCreated)
          : '--',
        preAuthDate: formatDate(patientData.preAuthorizationDate),
        provider: patientData.primaryDoctorName,
        rpmStatus: patientData.activationStatus,
        comments: patientData.CommentToPatients,
        practice: patientData.healthcareFacilityName,
        insuranceCompany: patientData.insurancePlan?.insuranceCompany.name,
        insurancePlan: patientData.insurancePlan?.plan,
        insuranceStatus: patientData.insuranceStatus,
        copayAmount: patientData.copayAmount,
      }
    }
  )

  return {
    count: data.count || 0,
    records: newData,
  }
}

// TODO: move me
const customToolBar = () => (
  <GridToolbarContainer sx={{ color: 'white' }}>
    <GridToolbarExport />
  </GridToolbarContainer>
)

// TODO: move me
// inteface for pagination model
export interface IPaginationModel {
  page: number
  pageSize: number
}

// TODO: move me
export const initialPaginationModel: IPaginationModel = {
  page: 0,
  pageSize: 30,
}

// TODO: move me
// interface for grid rows data
export interface IGridRowsData {
  count: number
  records: any
}

const PatientsPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [rowData, setRowData] = useState<IGridRowsData>({
    count: 0,
    records: [],
  })
  const [paginationModel, setPaginationModel] = useState<IPaginationModel>({
    page: 0,
    pageSize: 30,
  })

  const { patientMethods } = PatientData()

  useEffect(() => {
    async function getPatientsData() {
      const newRowsData = await patientMethods.getPatients(
        true,
        paginationModel.page + 1,
        paginationModel.pageSize,
        searchQuery,
        ''
      )

      setRowData(calcRowsData(newRowsData))
    }
    getPatientsData()
  }, [paginationModel, searchQuery])

  const columns = useMemo(() => [...gridColumns], [])

  return (
    <>
      <PatientTopBar setSearchQuery={setSearchQuery} />
      <GeneralTable columns={columns} rowData={rowData} />
    </>
  )
}

export default PatientsPage
