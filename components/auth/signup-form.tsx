'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { useSignupMutation } from '@/hooks/react-query/auth/authHooks'
import { SignupReq } from '@/types/auth'

// ====================|| SIGNUP FORM ||==================== //

export default function SignupForm() {
  const [signupBody, setSignupBody] = useState<SignupReq>({
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: '',
  })

  const router = useRouter()

  const { mutate: signup, isPending } = useSignupMutation({
    onSuccess: () => {
      router.push('/auth/login')
    },
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const inputValue = e.target.value
    if (key === 'email') {
      setSignupBody((prevState) => ({ ...prevState, email: inputValue }))
    } else if (key === 'username') {
      setSignupBody((prevState) => ({ ...prevState, username: inputValue }))
    } else if (key === 'password') {
      setSignupBody((prevState) => ({ ...prevState, password: inputValue }))
    } else if (key === 'first_name') {
      setSignupBody((prevState) => ({ ...prevState, first_name: inputValue }))
    } else if (key === 'last_name') {
      setSignupBody((prevState) => ({ ...prevState, last_name: inputValue }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signup(signupBody)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack>
            <InputLabel>Email</InputLabel>
            <TextField
              name="email"
              value={signupBody.email}
              onChange={(e) => handleChange(e, 'email')}
            />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack>
            <InputLabel>Username</InputLabel>
            <TextField
              name="username"
              value={signupBody.username}
              onChange={(e) => handleChange(e, 'username')}
            />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack>
            <InputLabel>First Name</InputLabel>
            <TextField
              name="first_name"
              value={signupBody.first_name}
              onChange={(e) => handleChange(e, 'first_name')}
            />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack>
            <InputLabel>Last Name</InputLabel>
            <TextField
              name="last_name"
              value={signupBody.last_name}
              onChange={(e) => handleChange(e, 'last_name')}
            />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack>
            <InputLabel>Password</InputLabel>
            <TextField
              name="password"
              type="password"
              value={signupBody.password}
              onChange={(e) => handleChange(e, 'password')}
            />
          </Stack>
        </Grid>
        <Grid size={12}>
          <Button variant="contained" type="submit" disabled={isPending}>
            Signup
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
