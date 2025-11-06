'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

import { Formik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { useLoginMutation } from '@/hooks/react-query/auth/authHooks'
import { loginInitialValues } from './login-values'
import CustomTextField from '@/components/form/custom-tesxtfield'
import LOGO from '@/public/assets/images/etoile-clinic-logo-small.png'
import CustomImage from '@/components/UI/image/custom-image'
import { getApiErrorMessage } from '@/utils/handleApiErrors'
import ButtonWithLoader from '@/components/UI/button/btn-with-loader'
import { IAuthState, useAuthStore } from '@/stores/auth-store'
import { ILoginRes } from '@/types/auth'
import { loginSchema } from '@/lib/schemas/auth'

// ====================|| LOGIN FORM ||==================== //

export default function LoginForm() {
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
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Formik
        initialValues={loginInitialValues}
        validationSchema={toFormikValidationSchema(loginSchema)}
        onSubmit={(values) => {
          login(values)
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
              <Link href="/">
                <CustomImage src={LOGO.src} alt="etoile-beauty-clinic-logo" objectFit="contain" />
              </Link>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <CustomTextField name="email" label="Email" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <CustomTextField name="password" label="Password" inputType="password" />
                </Grid>
                <MuiLink
                  component={Link}
                  href="/auth/reset-password"

                  underline="hover"
                >
                  Forgot passwrod?
                </MuiLink>
                <Grid size={12}>
                  <ButtonWithLoader isLoading={isPending} fullWidth>
                    Log In
                  </ButtonWithLoader>
                </Grid>
              </Grid>

              <Typography>
                Don&apos;t have an account?{' '}
                <MuiLink
                  component={Link}
                  href="/auth/signup"
                  sx={{ fontWeight: 600 }}
                  underline="hover"
                >
                  Sign Up
                </MuiLink>
              </Typography>
            </Paper>
          </form>
        )}
      </Formik>
    </Box>
  )
}
