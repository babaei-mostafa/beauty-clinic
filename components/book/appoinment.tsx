import Grid from '@mui/material/Grid'

import CustomSelect from '@/components/form/custom-select'
import CustomTextField from '@/components/form/custom-tesxtfield'

// ====================|| APPOINMENT DETAILS STEP ||==================== //

export default function AppoinmentDetailsStep() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <CustomSelect
          name="service_type"
          hasEmptyStringOption
          label="Service Type"
          options={[
            { label: 'Facial', value: 'facial' },
            { label: 'Hair Treatment', value: 'hair treatment' },
            { label: 'Manicure', value: 'manicure' },
            { label: 'Pedicure', value: 'pedicure' },
            { label: 'Waxing', value: 'waxing' },
            { label: 'Botax', value: 'botax' },
            { label: 'Filler', value: 'filler' },
            { label: 'Massage', value: 'massage' },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <CustomTextField name="specialist" label="Preferred Specialist" />
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
