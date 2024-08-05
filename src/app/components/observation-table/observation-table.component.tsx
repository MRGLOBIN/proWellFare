import {
  OrderableValueObservation,
  PaginatedResponse,
} from '@/app/setup/command-center/observations/page'
import ObservationCard from '../observation-card'

import './observation-table.style.css'

const ObservationTable = ({
  observationData,
}: {
  observationData: PaginatedResponse<OrderableValueObservation>
}) => {
  return (
    <article className='flex flex-wrap max-vh text-white'>
      {observationData.records.map((record: any, index: number) => (
        <ObservationCard
          key={index}
          colorStatus={record.colorStatus}
          fullName={record.patient.user.fullName}
          hospitalNumber={record.patient.hospitalNo}
          orderableName={record.orderable.name}
          orderableIcon={record.orderable.icon}
          acquisitionTime={record.acquisitionTime}
          resultableValues={record.resultableValues}
        />
      ))}
    </article>
  )
}

export default ObservationTable
