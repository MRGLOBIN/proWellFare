'use client'

import { SetStateAction, useMemo, useState } from 'react'

import PatientData from '@/app/setup/user/hooks/patient'

import { CustomisedDataGrid } from '@/app/ui/custom-components'

import { gridColumns } from '@/app/setup/user/patients/data-grid-columns'
import { exampleRows } from './delete-response-data'

import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import { colors, toolbarClasses } from '@mui/material'

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
    activationDate: 'unknown to me',
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

const customToolBar = () => (
  <GridToolbarContainer sx={{ color: 'white' }}>
    <GridToolbarExport />
  </GridToolbarContainer>
)

const PatientsPage = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 30,
  })

  const columns = useMemo(() => [...gridColumns], [])

  const handlePaginationModelChange = async (newPaginationModel: {
    page: number
    pageSize: number
  }) => {
    setPaginationModel(newPaginationModel)

    //TODO: request backend and get data also
    // const { patientMethods } = PatientData()
    // await patientMethods.getPatients()
    // console.log(newPaginationModel)
  }

  return (
    <div className='min-w-[100vw]  max-h-[90%] min-h-[83%] h-1'>
      <CustomisedDataGrid
        columns={columns}
        rows={exampleRow}
        paginationMode='server'
        rowCount={rowCount}
        disableEval
        disableColumnMenu
        disableColumnResize
        checkboxSelection
        disableColumnSorting
        columnHeaderHeight={40}
        rowHeight={40}
        getRowSpacing={param => ({
          top: param.isFirstVisible ? 2 : 0,
          bottom: param.isLastVisible ? 2 : 0,
        })}
        className='m-4 bg-[#2A2D38] text-white'
        pageSizeOptions={[30, 50, 100]}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        initialState={{
          pagination: { paginationModel: { pageSize: 30, page: 0 } },
        }}
        slots={{
          toolbar: customToolBar,
        }}
      />
    </div>
  )
}

export default PatientsPage
