import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import CloseIcon from '@mui/icons-material/Close'
import { Button, TextField } from '@mui/material'

const PageDialogueModal = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <Dialog
      open
      PaperProps={{
        sx: {
          backgroundColor: '#2A2D38',
          color: 'white',
          padding: 0,
          minWidth: '55%',
          minHeight: '70%',
        },
      }}
    >
      <DialogTitle sx={{ backgroundColor: '#686868', padding: 0 }}>
        <div className='flex justify-between items-center'>
          <h1 className='px-2'>{title}</h1>
          <Button
            sx={{
              backgroundColor: '#5095C9',
              color: 'white',
              ':hover': {
                backgroundColor: '#64A9DD',
              },
            }}
          >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>

      <DialogContent sx={{ padding: '0 10px', paddingTop: '20px !important' }}>
        {children}
      </DialogContent>
      <div className='h-[0.5px] w-[90%] ml-[5%] bg-[#686868]'></div>
      <DialogActions>
        <div className='flex justify-between items-center w-full'>
          <div>
            <Button
              className='text-[13px] font-mediump-2 py-[9px]'
              sx={{
                backgroundColor: '#F54336',
                color: 'white',
                ':hover': {
                  backgroundColor: '#ff574a',
                },
              }}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              className='text-[13px] font-mediump-2 py-[9px]'
              sx={{
                backgroundColor: '#5095C9',
                color: 'white',
                ':hover': {
                  backgroundColor: '#64A9DD',
                },
              }}
            >
              Update & Close
            </Button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  )
}

const DialogueModal = (title: string) => {
  const ComponentWithDialog = ({ children }: { children: React.ReactNode }) => (
    <PageDialogueModal title={title}>{children}</PageDialogueModal>
  )

  ComponentWithDialog.displayName = `withTitle(${title})`

  return ComponentWithDialog
}

export default DialogueModal

//  <TextField
//               label='Manufacturer'
//               sx={{
//                 backgroundColor: '#444957',
//                 borderRadius: '4px',
//                 '& .MuiTextField-root': {
//                   color: 'white',
//                 },
//                 '& label': {
//                   color: '#E8E9EA',
//                 },
//               }}
//               fullWidth
//             />
