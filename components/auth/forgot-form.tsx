'use client'

import Link from 'next/link'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

import { Formik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import CustomTextField from '@/components/form/custom-tesxtfield'

import { getApiErrorMessage } from '@/utils/handleApiErrors'
import ButtonWithLoader from '@/components/UI/button/btn-with-loader'
import { forgotPasswordSchema, loginSchema } from '@/lib/schemas/auth'
import AuthLayout from './auth-layout'
import { useForgotPasswordMutation } from '../../hooks/react-query/auth/authHooks'

// ====================|| FORGOT PASSWORD FORM ||==================== //

export default function ForgotPasswordForm() {

  const { mutate: forgotPassword, isPending } = useForgotPasswordMutation({
    onSuccess: () => {
      enqueueSnackbar('Please check your email', { variant: 'success' })
    },
    onError: (error: any) => {
      enqueueSnackbar(getApiErrorMessage(error), { variant: 'error' })
    },
  })

  return (
    <AuthLayout>
      <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>Password Reset</Typography>
      <Typography variant="caption">
        Provide the email address associated with your account to recover your password.
      </Typography>
      <Formik
        initialValues={{email: ""}}
        validationSchema={toFormikValidationSchema(forgotPasswordSchema)}
        onSubmit={(values) => {
          forgotPassword(values)
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <CustomTextField name="email" label="Email" />
              </Grid>
              <MuiLink component={Link} href="/auth/login" underline="hover">
                Back to Login
              </MuiLink>
              <Grid size={12}>
                <ButtonWithLoader isLoading={isPending} fullWidth>
                  Reset Password
                </ButtonWithLoader>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </AuthLayout>
  )
}
