'use client'

import { SetStateAction, useEffect, useMemo, useState } from 'react'

import PatientData from '@/app/setup/user/hooks/patient'

import { CustomisedDataGrid } from '@/app/ui/custom-components'

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
    return { rows: 0, records: [] }
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
    rows: data.count,
    records: newData,
  }
}

const customToolBar = () => (
  <GridToolbarContainer sx={{ color: 'white' }}>
    <GridToolbarExport />
  </GridToolbarContainer>
)

const PatientsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [rowData, setRowData] = useState<{ rows: number; records: any }>({
    rows: 0,
    records: [],
  })
  const [paginationModel, setPaginationModel] = useState({
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

  const handlePaginationModelChange = async (newPaginationModel: {
    page: number
    pageSize: number
  }) => {
    setPaginationModel(newPaginationModel)
  }

  return (
    <>
      <PatientTopBar setSearchQuery={setSearchQuery} />
      <div className='min-w-[100vw]  max-h-[90%] min-h-[83%] h-1'>
        <CustomisedDataGrid
          columns={columns}
          rows={rowData?.records}
          paginationMode='server'
          rowCount={rowData.rows}
          disableEval
          disableColumnMenu
          disableColumnResize
          checkboxSelection
          disableColumnSorting
          columnHeaderHeight={40}
          rowHeight={40}
          getRowClassName={params => {
            return params.indexRelativeToCurrentPage % 2 === 0
              ? 'bg-[#444750]'
              : 'bg-[#2a2d38]'
          }}
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
    </>
  )
}

export default PatientsPage
