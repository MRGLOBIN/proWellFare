import { styled } from '@mui/material/styles'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

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
