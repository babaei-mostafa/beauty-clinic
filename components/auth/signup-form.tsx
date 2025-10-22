'use client'

import { useRouter } from 'next/navigation'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import { Formik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { enqueueSnackbar } from 'notistack'

import { useSignupMutation } from '@/hooks/react-query/auth/authHooks'
import CustomTextField from '@/components/form/custom-tesxtfield'
import LOGO from '@/public/assets/images/etoile-clinic-logo-small.png'
import CustomImage from '@/components/UI/image/custom-image'
import { signupInitialValues } from './signup-values'
import { singupSchema } from '@/lib/schemas/signup'
import { getApiErrorMessage } from '@/utils/handleApiErrors'
import ButtonWithLoader from '../UI/button/btn-with-loader'

// ====================|| SIGNUP FORM ||==================== //

export default function SignupForm() {
  const router = useRouter()

  const { mutate: signup, isPending } = useSignupMutation({
    onSuccess: () => {
      router.push('/auth/login')
      enqueueSnackbar('Signup successful! Redirecting to login...', { variant: 'success' })
    },
    onError: (error: any) => {
      enqueueSnackbar(getApiErrorMessage(error), { variant: 'error' })
    },
  })

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        my: 1,
      }}
    >
      <Formik
        initialValues={signupInitialValues}
        validationSchema={toFormikValidationSchema(singupSchema)}
        onSubmit={(values) => {
          signup(values)
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Paper
              sx={{
                maxWidth: 600,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 2,
              }}
            >
              <CustomImage src={LOGO.src} alt="etoile-beauty-clinic-logo" objectFit="contain" />
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomTextField name="first_name" label="First Name" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomTextField name="last_name" label="Last Name" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomTextField name="username" label="Username" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomTextField name="email" label="Email" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomTextField name="password" label="Password" inputType="password" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <CustomTextField
                    name="confirm_password"
                    label="Confirm Password"
                    inputType="password"
                  />
                </Grid>
                <Grid size={12}>
                  <ButtonWithLoader isLoading={isPending} fullWidth>
                    Sign Up
                  </ButtonWithLoader>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      </Formik>
    </Box>
  )
}
