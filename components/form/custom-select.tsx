'use client'

import Stack from '@mui/material/Stack'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

// third-party
import { Field, FieldProps } from 'formik'
import { IOption } from '@/types/option'

interface Props {
  label: string
  name: string
  options: IOption[]
  disabled?: boolean
  hasEmptyStringOption?: boolean
  readOnly?: boolean
  isMultiple?: boolean
}

// ====================|| CUSTOM SELECT ||==================== //

export default function CustomSelect({
  label,
  name,
  options,
  disabled,
  hasEmptyStringOption,
  readOnly,
  isMultiple,
}: Props) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <Stack spacing={1}>
          <InputLabel error={meta.touched && !!meta.error} disabled={disabled}>
            {label}
          </InputLabel>
          <Select
            {...field}
            multiple={isMultiple}
            readOnly={readOnly}
            error={meta.touched && !!meta.error}
            displayEmpty
            variant="outlined"
            value={field.value ?? ''}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 250,
                  overflowX: 'hidden',
                  overflowY: 'auto',
                },
              },
            }}
          >
            {hasEmptyStringOption && (
              <MenuItem value="">
                <span className="opacity-40">Select an option</span>
              </MenuItem>
            )}
            {options.map((option) => (
              <MenuItem key={option.fieldName} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {meta.touched && meta.error && (
            <FormHelperText
              error={meta.touched && !!meta.error}
            >
              {meta.error}
            </FormHelperText>
          )}
        </Stack>
      )}
    </Field>
  )
}
