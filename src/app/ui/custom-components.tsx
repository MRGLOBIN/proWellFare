import { styled } from '@mui/material/styles'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { DataGrid } from '@mui/x-data-grid'

export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    backgroundColor: '#444957',
    '& input': {
      fontSize: '14px',
      color: 'white',
    },
    '& fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
      border: '2px solid red',
      color: 'red',
    },
  },
  '& .MuiInputLabel-outlined': {
    color: 'white',
  },
}))

export const CustomNumberField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    backgroundColor: '#444957',
    '& input': {
      fontSize: '14px',
      color: 'white',
      // Hide spinners in number input fields
      MozAppearance: 'textfield', // Firefox
      appearance: 'textfield', // Other browsers
    },
    '& input::-webkit-inner-spin-button': {
      display: 'none',
    },
    '& input::-webkit-outer-spin-button': {
      display: 'none',
    },
    '& fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
      border: '2px solid red',
      color: 'red',
    },
  },
  '& .MuiInputLabel-outlined': {
    color: 'white',
  },
}))

export const CustomOtpField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    margin: '0 5px',
    width: '50px',
    backgroundColor: '#444957',
    '&:hover fieldset': {
      border: '1px solid white',
    },
    '& fieldset': {
      border: '1px solid white',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid white',
    },
    '& input': {
      fontSize: '18px',
      fontWeight: '600',
      color: 'white',
      MozAppearance: 'textfield', // Firefox
      appearance: 'textfield', // Other browsers
    },
    '& input::-webkit-inner-spin-button': {
      display: 'none',
    },
    '& input::-webkit-outer-spin-button': {
      display: 'none',
    },
  },
}))

export const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '4px',
  backgroundColor: '#3496ce',
  color: 'white',

  '&.Mui-disabled': {
    backgroundColor: '#3A4F8D',
  },
}))

export const CustomisedDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 'none',
  color: '#D2D2D2',
  borderRadius: '9px',
  overflow: 'hidden',
  '--DataGrid-containerBackground': '#686868',
  '& .MuiDataGrid-columnHeaders': {
    color: '#D2D2D2',
    fontSize: '12px',
  },
  '& .MuiDataGrid-columnHeader': {
    '&:focus, &:focus-within': {
      outline: 'none',
    },
  },
  '& .MuiDataGrid-topContainer': {
    backgroundColor: '#686868',
  },
  '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
    outline: 'none',
  },
  '& .MuiDataGrid-cell': {
    border: 'none',
    '&:focus, &:focus-within': {
      outline: 'none',
    },
  },
  '& .MuiDataGrid-row': {
    borderBottom: 'none',
    backgroundColor: '#444750',
    '&:hover': {
      backgroundColor: '#4E515A',
    },
    '&.Mui-selected': {
      background: '#5095C9',
      outline: 'white',
      '&:hover': {
        background: '#5095C9',
      },
    },
  },
  '& .MuiDataGrid-footerContainer': {
    color: '#D2D2D2',
    borderTop: 'none',
    background: '#686868',
    height: '40px',
    minHeight: '40px',
  },
  '& .css-1jlz3st': { border: 'none' },
  '& .MuiToolbar-root': {
    color: '#D2D2D2',
  },
  '& .MuiSvgIcon-root': {
    color: '#D2D2D2',
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: '900',
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },
}))
