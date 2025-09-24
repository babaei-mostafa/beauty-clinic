import { FormEvent } from 'react'

import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

// ====================|| NEWS LETTER FORM ||==================== //

export default function NewsLetterForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('email submitted')
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Enter your email"
        sx={{
          width: '100%',
          '& input': { px: 0.5, py: 1 },
          '& fieldset': {
            p: 0,
            border: 0,
            borderBottom: '1px solid',
            borderRadius: 0,
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              border: 0,
              borderBottom: '1px solid',
            },
            '&.Mui-focused fieldset': {
              border: 0,
              borderBottom: '1px solid',
            },
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" type="submit">
                  <ArrowRightAltIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </form>
  )
}
