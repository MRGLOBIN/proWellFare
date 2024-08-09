export interface IGeneralTableColumns {
  title: string
  name?: string
  minWidth?:
    | 'ting'
    | 'extra small'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra large'
    | 'huge'
  filter?: {
    filterType: 'Standard' | 'Integrated'
    data: IDataStandard | IDataIntegrated
  }
  align?: 'left' | 'center' | 'right'
  visible?: boolean
  customFormat?: (row: any) => any
}

interface IDataStandard {
  isSortable?: boolean
  enum: IDataEnum[]
}

interface IDataIntegrated {
  endpoint: string
  valueKey: string
  displayKey: string
  paginatedResponse: boolean
}

interface IDataEnum {
  value: string
  viewValue: string
}
