'use client'

import { GeneralTable } from '@/app/components/general-table'
import useFacilityData from '@/app/setup/user/facility/hooks/facility-data'
import { formatDate, IPaginationModel } from '../patients/page'
import { facilityColumns } from './data-grid-columns'

const calcRowData = (data: { count: number; records: Facility[] }) => {
  const newData = data.records?.map((record: Facility, index: number) => ({
    id: index,
    name: record.name,
    email: record.email,
    mobile: record.phone,
    fax: record.fax,
    city: record.city,
    regDate: formatDate(record.dateCreated),
    ptan: record.ptan,
    address: record.address,
    practicePoc: record.pocName || '--',
    chiPoc: record.chiPOCName,
    tin: record.taxpayerIdentificationNo,
  }))

  return {
    count: data.count,
    records: newData,
  }
}

const PracticePage = () => {
  const { facuiltyMethods } = useFacilityData()

  const handlePaginationModelChange = (
    newPaginationModel: IPaginationModel
  ) => {
    facuiltyMethods.setPaginationModel(newPaginationModel)
  }

  return (
    <div className='h-full'>
      <GeneralTable
        paginationModel={facuiltyMethods.paginationModel}
        rowData={calcRowData(facuiltyMethods.facilityData)}
        columns={facilityColumns}
        setPaginationModel={facuiltyMethods.setPaginationModel}
      />
    </div>
  )
}

export default PracticePage

export interface Facility {
  healthcareFacilityId: string
  name: string
  email: string
  phone: string
  fax: string
  financialEmail?: string
  financialFax?: string
  address: string
  city: string
  postalCode: string
  state: string
  settings: string
  percentTax: number
  cptCodes: string
  dateCreated?: number
  ptan?: number
  amount: number
  amount53: number
  amount54?: number
  amount57?: number
  amount58?: number
  amount58b?: number
  amount99091?: number
  amountS0110U1: number
  amountS0110U2?: number
  amountS0110U3?: number
  amountS0110U4?: number

  amountS0110U7?: number
  amountS0110U8?: number
  amountS0110U9?: number
  discount: number
  isPercentDiscount: boolean
  total: number
  pocId?: string
  pocName?: string
  chiPOCId?: string
  chiPOCName?: string
  taxpayerIdentificationNo: string
  enableEmail: boolean
  enableFax: boolean
}
