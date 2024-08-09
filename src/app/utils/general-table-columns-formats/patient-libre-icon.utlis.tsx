import PatientLibreIcon from '@/app/components/general-table-components/patient-libre-icon.component'

export const NameIconFormat = (icon: keyof typeof IconsPath) => {
  function InnerComponent({ value }: { value: boolean }) {
    if (!value) return <>--</>

    return <PatientLibreIcon />
  }

  InnerComponent.displayName = `NameIconFormat(${icon})`
  return InnerComponent
}

export type IconTypes = 'LIBRE'

const IconsPath = {
  LIBRE: '/images/flag.png',
}
