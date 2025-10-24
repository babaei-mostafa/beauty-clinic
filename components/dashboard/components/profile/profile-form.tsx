'use client'

import Grid from '@mui/material/Grid'

import { Formik } from 'formik'

import { toFormikValidationSchema } from 'zod-formik-adapter'

import { profileInitialValues } from './values'
import CustomTextField from '@/components/form/custom-tesxtfield'
import PageContainer from '../page-container'
import ButtonWithLoader from '@/components/UI/button/btn-with-loader'
import { profileSchema } from '@/lib/schemas/user'
import { IAuthState, useAuthStore } from '@/stores/auth-store'
import CustomSelect from '@/components/form/custom-select'

// ====================|| PROFILE ||==================== //

export default function ProfileForm() {
  const { profile } = useAuthStore((state: IAuthState) => state)

  return (
    <PageContainer title="Profile">
      <Formik
        initialValues={profile ?? profileInitialValues}
        validationSchema={toFormikValidationSchema(profileSchema)}
        enableReinitialize
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomTextField name="first_name" label="First Name" />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomTextField name="last_name" label="Last Name" />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomTextField name="username" label="Username" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <CustomTextField name="email" label="Email" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <CustomSelect
                  name="role"
                  label="Role"
                  options={[
                    { label: 'User', value: 'user' },
                    { label: 'Staff', value: 'staff' },
                    { label: 'Admin', value: 'admin' },
                  ]}
                />
              </Grid>
              <Grid size={12}>
                <ButtonWithLoader isLoading={false}>Save</ButtonWithLoader>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </PageContainer>
  )
}
