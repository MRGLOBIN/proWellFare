'use client'
import useObervationData from '../hooks/observation-data'
import { useEffect, useState } from 'react'
import { Paginator } from '@/app/ui/custom-components'

import { ObservationHeader } from '@/app/components/observation-header'

import ObservationTable from '@/app/components/observation-table/observation-table.component'
import { GeneralTable } from '@/app/components/generalTable/general-table-body'
import { observationGridColumns } from './data-grid-columns'
import {
  formatDate,
  initialPaginationModel,
  IPaginationModel,
} from '../../user/patients/page'
import { GeneralTableTopBar } from '@/app/components/generalTable/general-table-top-bar'

// TODO:
// move me
export interface IFilterCheckBoxeColor {
  color: string
  show: boolean
}

const filterCheckBoxColors = [
  {
    color: '#01b050',
    show: false,
  },
  {
    color: '#d8d800',
    show: false,
  },
  {
    color: '#ff8a00',
    show: false,
  },
  {
    color: '#fa0000',
    show: false,
  },
  {
    color: 'white',
    show: false,
  },
  {
    color: '#414141',
    show: false,
  },
]

const calcRowData = (data: { records: any[]; count: any }) => {
  if (!data) {
    console.log(data)
    return { count: 0, records: [] }
  }

  const newData = data.records.map(
    (observationData: OrderableValueObservation) => ({
      id: observationData.orderableValueId,
      ' ': observationData.colorStatus,
      patients: observationData.patient.user.fullName,
      reg: observationData.patient.hospitalNo,
      practice: observationData.patient.rmsAdmissions
        ?.map(admission => admission.healthcareFacility.name)
        .join(', '),
      vital: observationData.orderable.name,
      dateAndTime: formatDate(observationData.acquisitionTime),
      results: observationData.resultableValues.map(resultableValue => ({
        status: resultableValue.status,
        name: resultableValue.resultable.name,
        unit: resultableValue.resultable?.resultUnit,
        numbericValue: resultableValue.numericValue,
      })),
      status: observationData.status,
    })
  )

  return {
    count: data.count,
    records: newData,
  }
}

//TODO:
//oerderable Icon and status color also numberic number status color
const ObservationPage = () => {
  const { ObservationMethods } = useObervationData()
  const [observationData, setObservationData] = useState<
    PaginatedResponse<OrderableValueObservation>
  >({ count: 0, pages: 0, records: [] })

  const [filterCheckBoxs, setFilterCheckBoxs] = useState(filterCheckBoxColors)
  const [gridLayout, setGridLayout] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])

  const [practiceSearchData, setPracticeSearchData] = useState<string[]>([])

  const [paginationModel, setPaginationModel] = useState<IPaginationModel>(
    initialPaginationModel
  )

  const handleOnPressButton = (index: number) => {
    const newFilterCheckBoxs = filterCheckBoxs.map((item, i) =>
      i === index ? { ...item, show: !item.show } : item
    )
    setFilterCheckBoxs(newFilterCheckBoxs)
  }

  const handlePaginationModelChange = (
    newPaginationModel: IPaginationModel
  ) => {
    setPaginationModel(newPaginationModel)
  }

  useEffect(() => {
    async function getData() {
      const data = await ObservationMethods.getObservationData({
        page: paginationModel.page + 1,
        per_page: paginationModel.pageSize,
      })
      const practices = await ObservationMethods.getPractices()
      // console.log(practices)
      setObservationData(data)
    }
    getData()
  }, [paginationModel])
  return (
    <div className='bg-[#252831] p-2 flex flex-col h-full'>
      <div className='flex-shrink-0'>
        <ObservationHeader
          gridLayout={gridLayout}
          setGridLayout={setGridLayout}
          filterCheckBoxs={filterCheckBoxs}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          handleOnPressButton={handleOnPressButton}
          practiceSearchData={practiceSearchData}
        />
      </div>
      {gridLayout ? (
        <>
          {/* <GeneralTableTopBar /> */}
          <GeneralTable
            columns={observationGridColumns}
            rowData={calcRowData(observationData)}
            setPaginationModel={setPaginationModel}
            paginationModel={paginationModel}
          />
        </>
      ) : (
        <ObservationTable observationData={observationData} />
      )}
      {gridLayout ? (
        ''
      ) : (
        <div className='flex-shrink-0'>
          <Paginator
            count={observationData.count || 0}
            page={paginationModel.page}
            onPageChange={(
              event: React.MouseEvent<HTMLButtonElement> | null,
              newPage: number
            ) =>
              handlePaginationModelChange({
                page: newPage,
                pageSize: paginationModel.pageSize,
              })
            }
            rowsPerPage={paginationModel.pageSize}
            onRowsPerPageChange={event => {
              const newRowsPerPage = parseInt(event.target.value, 10)
              handlePaginationModelChange({ page: 0, pageSize: newRowsPerPage })
            }}
            rowsPerPageOptions={[30, 50, 100, 500]}
          />
        </div>
      )}
    </div>
  )
}

export default ObservationPage

// TODO: move me
// type for practiceSearchData
export interface PracticeModel {
  chiPOCName: string
  healthcareFacilityId: string
  pocId: any
  chiPOCId: string
  tzOffset: number
  name: string
  phone: string
  taxpayerIdentificationNo: string
  email: string
  fax: string
  financialEmail: string
  financialFax: string
  enableFax: boolean
  enableEmail: boolean
  address: string
  city: string
  postalCode: string
  state: string
  settings: string
  percentTax: number
  discount: number
  isPercentDiscount: boolean
  isDeleted: boolean
  dateCreated: number
  dateUpdated: number
}

// TODO: move me
// type for oderable (select vital filter)
export type OrderableType =
  | 'VITAL'
  | 'HOMECARE'
  | 'MEDICINE'
  | 'RADIOLOGY'
  | 'LAB'

export interface Orderable {
  orderableId: string
  name: string
  abbr?: string
  icon?: string
  times?: string
  instructions?: string
  orderableType: OrderableType
  isDeleted?: boolean
  dateCreated: number
  dateUpdated: number
}

// TODO: moveMe
// general interface for pagination response
export interface PaginatedResponse<T> {
  count: number
  pages: number
  records: T[]
}

// TODO: move me
// type for observation data
export interface OrderableValueObservation {
  orderableValueId: string
  patientId: string
  comments?: string
  observationTime?: number
  acquisitionTime?: number
  captureTime?: number
  readingTime?: number
  status?: OrderableStatus
  colorStatus?: OrderableColorStatus
  isValid: boolean
  patient: ObservationsOrderableValuePatient
  orderable: ObservationsOrderableValueOrderable
  resultableValues: ObservationsOrderableValueResultableValue[]
  liveOrderableValueId: string
  liveOrderableValue: LiveOrderableValue
  subjects: any[]
  USEscalation: ObservationUSEscalation[]

  opr_status?: string
  rowActions?: any
  is_manual: boolean
}

// TODO: move me all
// dependicies for observation data interface
export type OrderableStatus =
  | 'NORMAL'
  | 'UNHANDLED'
  | 'ESCALATED'
  | 'RESPONDED'
  | 'CLOSED'
  | 'INVALID'
  | 'SEEN'
  | 'HANDLED'
  | 'ESCALATED_TO_RN'
  | 'ESCALATED_TO_PRACTICE'
  | 'ESCALATED_AND_HANDLED'

export type OrderableColorStatus =
  | 'NORMAL'
  | 'ABNORMAL'
  | 'WARNING'
  | 'CRITICAL'
  | 'INVALID'
  | 'UNKNOWN'

export interface ObservationsOrderableValuePatientUser {
  fullName: string
  image?: string
  userId: string
}

export interface ObservationsOrderableValuePatient {
  age?: number
  user: ObservationsOrderableValuePatientUser
  rmsAdmissions?: PatientAdmissionInfo[]
  hospitalNo?: string
}

interface PatientAdmissionInfoHealthcareFacility {
  healthcareFacilityId: string
  name: string
}

export interface PatientAdmissionInfo {
  rmsAdmissionId: string
  primaryDoctorId: string
  healthcareFacility: PatientAdmissionInfoHealthcareFacility
}

export interface ObservationsOrderableValueOrderable {
  name: string
  orderableId: string
  icon?: string
}

export interface ObservationsOrderableValueResultableValue {
  resultableValueId: string
  textValue?: string
  numericValue?: number
  dataValue?: string
  fileUrls?: string
  status?: ResultableStatus
  resultable: ObservationsOrderableValueResultableValueResultable

  urls?: string[]
}

export interface ObservationsOrderableValueResultableValueResultable {
  key: string
  resultUnit?: string
  resultableId: string
  dataType: ResultableData
  name: string
}

export interface LiveOrderableValue {
  isLive: boolean
  cmFile: string
  deviceInventory: { deviceModel: { deviceModel: string } }
}

interface ObservationUSEscalation {
  usEscalationId: string
  escalationStatus: keyof typeof USEscalationStatus
}

export type ResultableStatus =
  | 'CRITICAL_LOW'
  | 'WARNING_LOW'
  | 'NORMAL'
  | 'WARNING_HIGH'
  | 'CRITIAL_HIGH'

export type ResultableData = 'NUMBER' | 'TEXT' | 'DATA' | 'FILEURL'

export const USEscalationStatus = {
  OPEN: 'OPEN',
  ESCALATED_TO_RN: 'ESCALATED_TO_RN',
  ESCALATED_TO_PRACTICE: 'ESCALATED_TO_PRACTICE',
  ESCALATED_AND_HANDLED: 'ESCALATED_AND_HANDLED',
  MARK_CLOSED: 'MARK_CLOSED',
} as const
