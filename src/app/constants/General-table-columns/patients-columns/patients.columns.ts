import { IGeneralTableColumns } from '@/app/types/general-table/general-table-columns.types'
import { DateFormat } from '@/app/utils/general-table-columns-formats/date-format.utils'
import { FullNameFormat } from '@/app/utils/general-table-columns-formats/fullname-formatter.utils'
import { IconFormat } from '@/app/utils/general-table-columns-formats/icon-format.utils'
import { NameIconFormat } from '@/app/utils/general-table-columns-formats/patient-libre-icon.utlis'

// TODO:
// manage width
const PATIENTS_COLUMNS_GENERALTABLE: IGeneralTableColumns[] = [
  {
    title: 'FLAG',
    name: 'flag',
    minWidth: 'ting',
    // customFormat:
  },
  {
    name: 'user.fullName',
    title: 'Patient',
    minWidth: 'medium',
    // customFormat
  },
  {
    name: 'patientCaregiver',
    title: 'patientCaregiver',
    // customFormat
  },
  {
    name: 'hospitalNo',
    title: 'Reg. No',
  },
  {
    name: 'user.email',
    title: 'Email',
    minWidth: 'medium',
  },
  {
    name: 'user.mobile',
    title: 'Mobile',
  },
  {
    name: 'referralDate',
    title: 'Referred On',
    minWidth: 'extra small',
    // customFormat
  },
  {
    name: 'user.dateCreated',
    title: 'Register On',
    minWidth: 'extra small',
    // customFormat
  },
  {
    name: 'orderableValues',
    title: 'Activation Date',
  },
  {
    name: 'preAuthorizationDate',
    title: 'Pre Auth Date',
    minWidth: 'extra small',
    // customFormat
  },
  {
    name: 'primaryDoctorName',
    title: 'Provider',
  },
  {
    name: 'activationStatus',
    title: 'RPM Status',
    minWidth: 'medium',
    filter: {
      filterType: 'Standard',
      data: {
        isSortable: false,
        enum: [
          { value: 'REFERRED', viewValue: 'Referred' },
          { value: 'ASSIGNED', viewValue: 'Device Assigned' },
          { value: 'ACTIVE', viewValue: 'Active' },
          { value: 'INACTIVE', viewValue: 'Inactive' },
          { value: 'TERMINATE', viewValue: 'Terminate' },
          { value: 'INSURANCE_VERIFIED', viewValue: 'Insurance Verified' },
          { value: 'ACCEPTED', viewValue: 'Accepted' },
          { value: 'DECLINED', viewValue: 'Declined' },
          { value: 'DID_NOT_ANSWER', viewValue: 'Did Not Answer' },
          //TERMINATE: 'Discharge',
          { value: 'TRAINING_SCHEDULED', viewValue: 'Training Scheduled' },
        ],
      },
    },
    // customFormat
  },
  {
    name: 'CommentToPatients',
    title: 'COMMENTS',
    minWidth: 'medium',
    // customFormat
  },
  {
    name: 'healthcareFacilityName',
    title: 'Practice (s)',
    filter: {
      filterType: 'Integrated',
      data: {
        endpoint: 'healthcare-facility/employee',
        valueKey: 'healthcareFacilityId',
        displayKey: 'name',
        paginatedResponse: false,
      },
    },
  },
  {
    name: 'insurancePlan.insuranceCompany.name',
    title: 'Insurance Company',
    minWidth: 'large',
  },
  {
    name: 'insurancePlan.plan',
    title: 'Insurance Plan',
  },
  {
    name: 'insuranceStatus',
    title: 'Insurance Status',
    // customFormat,
  },
  {
    name: 'copayAmount',
    title: 'Copay Amount ($)',
  },
]

export default PATIENTS_COLUMNS_GENERALTABLE
