import ObservationCard from '../observation-card'

import './observation-table.style.css'

const ObservationTable = ({ observationData }) => {
  return (
    <article className='w-full flex flex-1 flex-wrap text-white  max-vh  overflow-y-scroll'>
      {observationData?.records?.map((record: any, index: number) => (
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
