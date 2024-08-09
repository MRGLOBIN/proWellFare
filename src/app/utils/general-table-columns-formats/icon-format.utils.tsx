import FlagCellRender from '@/app/components/general-table-components/flag-cell-render/flag-cell-render'

export const IconFormat = (icon: keyof typeof IconsPath) => {
  function InnerComponent({ value }: { value: boolean }) {
    if (!value) return <>--</>

    return <FlagCellRender icon={IconsPath[icon]} />
  }

  InnerComponent.displayName = `IconFormat(${icon})`
  return InnerComponent
}

export type IconTypes = 'FLAG' | 'normal'

const IconsPath = {
  FLAG: '/images/flag.png',
}
