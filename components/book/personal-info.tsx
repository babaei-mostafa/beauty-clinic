import Grid from '@mui/material/Grid'

import CustomSelect from '@/components/form/custom-select'
import CustomTextField from '@/components/form/custom-tesxtfield'

// ====================|| PERSONL INFORMATION STEP ||==================== //

export default function PersonalInfoStep() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <CustomTextField
          name="fullname"
          label="Full Name"
          placeholder="Enter your full name"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <CustomTextField
          name="phone"
          label="Phone"
          placeholder="Enter your phone"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <CustomTextField
          name="email"
          label="Email"
          placeholder="Enter your email"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <CustomSelect
          name="contact_method"
          hasEmptyStringOption
          label="Preferred Contact Method"
          options={[
            { label: 'Phone', value: 'phone' },
            { label: 'Email', value: 'email' },
            { label: 'WhatsApp', value: 'whatsapp' },
          ]}
        />
      </Grid>
    </Grid>
  )
}
