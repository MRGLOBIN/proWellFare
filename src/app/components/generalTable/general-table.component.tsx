import { GridColDef } from '@mui/x-data-grid'
import { GeneralTableBody } from './general-table-body'
import { GeneralTableTopBar } from './general-table-top-bar'

import { IGridRowsData, IPaginationModel } from '@/app/setup/user/patients/page'

interface IGeneralTableHeaderProps {
  title?: string
  isAddIcon?: boolean
  isTitleIcon?: boolean
  isSearchField?: boolean
  isRefreshIcon?: boolean
  isSettingsIcon?: boolean
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>
}

interface IGeneralTableBodyProps {
  // TODO fix me
  columns: GridColDef[]
  // TODO: cumstomise the data
  rowData: IGridRowsData
  paginationModel: IPaginationModel
  setPaginationModel: React.Dispatch<React.SetStateAction<IPaginationModel>>
}

interface IGeneralTableProps
  extends IGeneralTableHeaderProps,
    IGeneralTableBodyProps {}

const GeneralTable = ({
  generalTableHeaderProps,
  generalTableBodyProps,
}: {
  generalTableHeaderProps: IGeneralTableHeaderProps
  generalTableBodyProps: IGeneralTableBodyProps
}) => {
  return (
    <>
      <GeneralTableTopBar {...generalTableHeaderProps} />
      <div className='m-2 h-full'>
        <GeneralTableBody {...generalTableBodyProps} />
      </div>
    </>
  )
}

export default GeneralTable
