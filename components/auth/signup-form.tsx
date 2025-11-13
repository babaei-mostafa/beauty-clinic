'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

import { Formik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { enqueueSnackbar } from 'notistack'

import { useSignupMutation } from '@/hooks/react-query/auth/authHooks'
import CustomTextField from '@/components/form/custom-tesxtfield'
import { signupInitialValues } from './signup-values'
import { singupSchema } from '@/lib/schemas/auth'
import { getApiErrorMessage } from '@/utils/handleApiErrors'
import ButtonWithLoader from '@/components/UI/button/btn-with-loader'
import AuthLayout from './auth-layout'

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
    <AuthLayout>
      <Formik
        initialValues={signupInitialValues}
        validationSchema={toFormikValidationSchema(singupSchema)}
        onSubmit={(values) => {
          signup(values)
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <CustomTextField name="first_name" label="First Name" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <CustomTextField name="last_name" label="Last Name" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <CustomTextField name="username" label="Username" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <CustomTextField name="email" label="Email" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <CustomTextField name="password" label="Password" inputType="password" />
              </Grid>
              <Grid size={{ xs: 12 }}>
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
            <Typography sx={{ mt: 4, textAlign: 'center' }}>
              Already have an account?{' '}
              <MuiLink
                component={Link}
                href="/auth/login"
                sx={{ fontWeight: 600 }}
                underline="hover"
              >
                Log In
              </MuiLink>
            </Typography>
          </form>
        )}
      </Formik>
    </AuthLayout>
  )
}
