import Grid from '@mui/material/Grid'

import CustomSelect from '@/components/form/custom-select'
import CustomTextField from '@/components/form/custom-tesxtfield'

// ====================|| ADDITIONAL INFORMATION STEP ||==================== //

export default function AdditionalInformationStep() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
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
      <Grid size={{ xs: 12 }}>
        <CustomTextField name="notes" label="Special Requests / Notes" multiline />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField name="date" label="Appoinment Date" />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField name="time" label="Preferred Time Slot" />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <CustomTextField name="duration" label="Duration" />
      </Grid>
    </Grid>
  )
}
