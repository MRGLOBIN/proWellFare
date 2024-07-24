'use client'

import { useMemo } from 'react'

import { CustomisedDataGrid } from '@/app/ui/custom-components'

import { gridColumns } from '@/app/setup/users/patients/data-grid-columns'
import { exampleRows } from './delete-response-data'

import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

const exampleRow = exampleRows.records.map(patientData => {
  // const refferalDateUnFormatted = new Date(patientData.referralDate * 1000)
  // const refferalDate = [
  //   ('0' + (refferalDateUnFormatted.getMonth() + 1)).slice(-2), // Month (01-12)
  //   ('0' + refferalDateUnFormatted.getDate()).slice(-2), // Day (01-31)
  //   refferalDateUnFormatted.getFullYear(), // Year (YYYY)
  // ].join('-')

  return {
    id: patientData.patientId,
    flag: patientData.flag,
    patientName: `${patientData.user.firstName} ${patientData.user.lastName}`,
    careGiver: `${patientData.caregiverFirstName} ${patientData.caregiverLastName}`,
    regNo: patientData.hospitalNo,
    email: patientData.user.email,
    birthDate: patientData.user.birthDateString,
    mobile: patientData.user.mobile,
    refferedOn: patientData.referralDate,
    registerOn: patientData.dateCreated,
    activationDate: 'unknown to me',
    preAuthDate: patientData.preAuthorizationDate,
    provider: patientData.primaryDoctorName,
    rpmStatus: patientData.activationStatus,
    comments: patientData.CommentToPatients,
    partice: patientData.healthcareFacilityName,
    insuranceCompany: patientData.insurancePlan.insuranceCompany.name,
    insurancePlan: patientData.insurancePlan.plan,
    insuranceStatus: patientData.insuranceStatus,
    copayAmount: patientData.copayAmount,
  }
})

// const exampleRow = [
//   {
//     id: 1,
//     flag: true,
//     patient: 'human',
//     caregiver: 'another human',
//     reg: '2024',
//     email: 'w@w.com',
//     birthdate: '2101',
//     mobile: '123415',
//     reffered: 'someone',
//     register: '20 204',
//     activation: '18-june',
//     auth: '18',
//     provider: 'no one',
//     rpmstatus: 'nope',
//     comment: {
//       comment: 'no Comments',
//       dateCreated: '12',
//       employee: { user: { fullName: 'user comment name' } },
//     },
//     pratice: 'lahore',
//     insurance: 'company',
//     plan: 'a day plan',
//     insurancestatus: 'none',
//     copay: '20',
//   },
// ]

const customToolBar = () => (
  <GridToolbarContainer sx={{ color: 'white' }}>
    <GridToolbarExport />
  </GridToolbarContainer>
)

const PatientsPage = () => {
  const columns = useMemo(() => [...gridColumns], [])

  return (
    <div className='min-w-[100vw]  max-h-[90%] min-h-[83%] h-1'>
      <CustomisedDataGrid
        columns={columns}
        rows={exampleRow}
        disableEval
        disableColumnResize
        checkboxSelection
        columnHeaderHeight={40}
        rowHeight={40}
        className='m-4 bg-[#2A2D38]'
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        slots={{
          toolbar: customToolBar,
        }}
      />
    </div>
  )
}

export default PatientsPage
