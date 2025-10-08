import Grid from '@mui/material/Grid'

import CustomSelect from '@/components/form/custom-select'
import CustomTextField from '@/components/form/custom-tesxtfield'
import { IBookReq } from '@/types/book'

interface Props {
  values: IBookReq
}

// ====================|| ADDITIONAL INFORMATION STEP ||==================== //

export default function AdditionalInformationStep({ values }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <CustomSelect
          name="referral_source"
          hasEmptyStringOption
          label="How did you hear about our beauty house"
          options={[
            { label: 'Instagram', value: 'instagram' },
            { label: 'Google', value: 'google' },
            { label: 'Referral', value: 'referral' },
            { label: 'Other', value: 'other' },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <CustomSelect
          label="Do you have any allergies?"
          name="is_allergy"
          options={[
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ]}
        />
      </Grid>
      {values.is_allergy && (
        <Grid size={{ xs: 12 }}>
          <CustomTextField
            name="allergy"
            label="Allergies"
            placeholder="Enter your allergies"
            multiline
          />
        </Grid>
      )}

      <Grid size={{ xs: 12 }}>
        <CustomTextField
          name="notes"
          label="Special Requests / Notes"
          multiline
        />
      </Grid>
    </Grid>
  )
}
