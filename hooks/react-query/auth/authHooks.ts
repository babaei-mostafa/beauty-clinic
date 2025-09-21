import { LoginReq, SignupReq } from '@/types/auth'
import { MutationOptions, useMutation } from '@tanstack/react-query'
import { login, signup } from './authApi'
import { AxiosError } from 'axios'

export const useLoginMutation = (
  options?: MutationOptions<any, AxiosError, LoginReq>
) => {
  const mutationKey = [`/auth/login`]
  return useMutation<any, AxiosError, LoginReq>({
    mutationKey,
    mutationFn: (body: LoginReq) => login(body),
    ...options,
  })
}

export const useSignupMutation = (
  options?: MutationOptions<any, AxiosError, SignupReq>
) => {
  const mutationKey = [`/auth/signup`]
  return useMutation({
    mutationKey,
    mutationFn: (body: SignupReq) => signup(body),
    ...options,
  })
}
