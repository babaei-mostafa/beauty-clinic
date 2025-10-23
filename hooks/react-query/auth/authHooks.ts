import { ILoginReq, ILoginRes, ILogoutRes, ISignupReq } from '@/types/auth'
import { MutationOptions, useMutation } from '@tanstack/react-query'
import { login, logout, signup } from './authApi'
import { AxiosError } from 'axios'

export const useLoginMutation = (options?: MutationOptions<ILoginRes, AxiosError, ILoginReq>) => {
  const mutationKey = [`/auth/login`]
  return useMutation<ILoginRes, AxiosError, ILoginReq>({
    mutationKey,
    mutationFn: (body: ILoginReq) => login(body),
    ...options,
  })
}

export const useSignupMutation = (options?: MutationOptions<any, AxiosError, ISignupReq>) => {
  const mutationKey = [`/auth/signup`]
  return useMutation({
    mutationKey,
    mutationFn: (body: ISignupReq) => signup(body),
    ...options,
  })
}

export const useLogoutMutation = (options?: MutationOptions<ILogoutRes, AxiosError>) => {
  const mutationKey = [`/auth/logut`]
  return useMutation({
    mutationKey,
    mutationFn: () => logout(),
    ...options,
  })
}
