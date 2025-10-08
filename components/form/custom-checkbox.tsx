import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'

import { Field, FieldProps } from 'formik'
import { ReactNode } from 'react'

interface Props {
  label: string | ReactNode
  name: string
  disabled?: boolean
}

// ====================|| CUSTOM CHECKBOX ||==================== //

export default function CustomCheckbox({ label, name, disabled }: Props) {
  return (
    <Field name={name} type="checkbox">
      {({ field, meta }: FieldProps) => (
        <FormControl error={meta.touched && !!meta.error} disabled={disabled}>
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={field.value}
                sx={{ '& label': { marginRight: 0 } }}
              />
            }
            label={label}
          />
          {meta.touched && meta.error && (
            <FormHelperText sx={{ fontWeight: 'bold' }}>
              {meta.error}
            </FormHelperText>
          )}
        </FormControl>
      )}
    </Field>
  )
}
