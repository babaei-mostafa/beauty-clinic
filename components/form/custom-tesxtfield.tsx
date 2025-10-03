import Stack from '@mui/material/Stack'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'

import { Field, FieldProps } from 'formik'
import { ChangeEvent } from 'react'

interface Props {
  name: string
  label: string
  disabled?: boolean
  placeholder?: string
  inputType?: string
  isNumber?: boolean
}

// =====================|| CUSTOM TEXTFIELD ||==================== //

export default function CustomTextField({
  name,
  label,
  disabled,
  placeholder,
  inputType = 'text',
  isNumber = false,
}: Props) {
  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => {
        const handleChange = (
          e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          let inputValue = e.target.value
          if (isNumber) {
            inputValue = inputValue.replace(/\D/g, '')
          }
          form.setFieldValue(name, inputValue)
        }
        return (
          <Stack spacing={1}>
            <InputLabel
              disabled={disabled}
              error={meta.touched && !!meta.error}
            >
              {label}
            </InputLabel>
            <TextField
              {...field}
              disabled={disabled}
              variant="outlined"
              placeholder={placeholder || `Please enter ${label}`}
              type={inputType}
              value={field.value || ''}
              onChange={handleChange}
              error={meta.touched && !!meta.error}
              helperText={meta.touched && meta.error ? meta.error : ''}
            />
          </Stack>
        )
      }}
    </Field>
  )
}
