export interface Patient {
  CommentToPatients: Comment[]
  caregiverFirstName?: string
  caregiverLastName?: string
  caregiverMobile?: string
  caregiverRelation?: string
  patientCaregiver?: string
  patientId?: string
  hospitalNo?: string
  doctorNotes?: string
  admissionStatus: string
  flag: boolean
  healthcareFacilityId?: string
  healthcareFacilityName?: string
  activationStatus?: keyof typeof ActivationStatus
  isReferredMailSent?: boolean
  insuranceStatus?: keyof typeof InsuranceStatus
  copayAmount?: number
  librePatientId?: string
  librePracticeId?: string
  rmsAdmissionId?: string
  referralDate?: number
  homeHealthAgency: HomeHealthAgency
  orderableValues: AcquisitionTime[]
  insurancePlan: {
    plan: string
    insuranceCompany: {
      name: string
    }
  }
  user?: {
    email: string
    mobile: string
    roleType: string
    birthDate: string
    birthDateString: string
    fullName: string
    dateCreated: number
  }
  preAuthorizationDate: number
  primaryDoctorName?: string
  primaryDoctorId?: string
}

export interface Comment {
  comment: string
  dateCreated: number
  employee: Employee
}

interface Employee {
  user: {
    fullName: string
  }
}

export const ActivationStatus = {
  REFERRED: 'Referred',
  TERMINATE: 'Terminated',
  ASSIGNED: 'Device Assigned',
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  TRAINING_SCHEDULED: 'Training Scheduled',
  DID_NOT_ANSWER: 'Did Not Answer',
  ACCEPTED: 'Accepted',
  DECLINED: 'Declined',
  INSURANCE_VERIFIED: 'Insurance verified',
} as const

export const InsuranceStatus = {
  INSURED: 'Insured',
  COPAY: 'Copay',
  WONT_COPAY: "Won't Copay",
  UNINSURED: 'Uninsured',
} as const

export interface HomeHealthAgency {
  homeHealthAgencyName: string
  homeHealthAgencyMemberName: string
}

interface AcquisitionTime {
  acquisitionTime: number
}
