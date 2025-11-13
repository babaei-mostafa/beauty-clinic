'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

import { Formik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { useLoginMutation } from '@/hooks/react-query/auth/authHooks'
import { loginInitialValues } from './login-values'
import CustomTextField from '@/components/form/custom-tesxtfield'

import { getApiErrorMessage } from '@/utils/handleApiErrors'
import ButtonWithLoader from '@/components/UI/button/btn-with-loader'
import { IAuthState, useAuthStore } from '@/stores/auth-store'
import { ILoginRes } from '@/types/auth'
import { loginSchema } from '@/lib/schemas/auth'
import AuthLayout from './auth-layout'

// ====================|| FORGOT PASSWORD FORM ||==================== //

export default function ForgotPasswordForm() {
  const router = useRouter()
  const { setProfile } = useAuthStore((state: IAuthState) => state)

  const { mutate: login, isPending } = useLoginMutation({
    onSuccess: (data: ILoginRes) => {
      enqueueSnackbar("You've successfully logged in!", { variant: 'success' })
      setProfile(data)
      router.push('/dashboard')
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
        initialValues={loginInitialValues}
        validationSchema={toFormikValidationSchema(loginSchema)}
        onSubmit={(values) => {
          login(values)
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <CustomTextField name="email" label="Email" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <CustomTextField name="password" label="Password" inputType="password" />
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
