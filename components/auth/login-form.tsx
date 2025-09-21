'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { useLoginMutation } from '@/hooks/react-query/auth/authHooks'

export default function LoginForm() {
  const [loginBody, setLoginBody] = useState({ email: '', password: '' })

  const router = useRouter()

  const { mutate: login, isPending } = useLoginMutation({
    onSuccess: () => {
      router.push('/')
    },
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const inputValue = e.target.value
    if (key === 'email') {
      setLoginBody((prevState) => ({ ...prevState, email: inputValue }))
    } else if (key === 'password') {
      setLoginBody((prevState) => ({ ...prevState, password: inputValue }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('login body: ', loginBody)
    login(loginBody)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack spacing={1}>
            <InputLabel>Email</InputLabel>
            <TextField
              type="text"
              value={loginBody.email}
              onChange={(e) => handleChange(e, 'email')}
            />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack spacing={1}>
            <InputLabel>Passwrod</InputLabel>
            <TextField
              type="password"
              value={loginBody.password}
              onChange={(e) => handleChange(e, 'password')}
            />
          </Stack>
        </Grid>
        <Grid size={12}>
          <Button type="submit" variant="contained" disabled={isPending}>
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
