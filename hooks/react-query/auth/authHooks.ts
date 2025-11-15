import { ILoginReq, ILoginRes, ILogoutRes, ISignupReq, IVerifyRes } from '@/types/auth'
import {
  MutationOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { forgotPassword, hasSession, login, logout, signup, verify } from './authApi'
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
  const mutationKey = [`/auth/logout`]
  return useMutation({
    mutationKey,
    mutationFn: () => logout(),
    ...options,
  })
}

export const useVerifyQuery = (
  options?: Omit<UseQueryOptions<IVerifyRes, AxiosError, IVerifyRes>, 'queryKey' | 'queryFn'>
): UseQueryResult<IVerifyRes, AxiosError> => {
  const queryKey = ['/auth/verify']

  return useQuery<IVerifyRes, AxiosError>({
    queryKey,
    queryFn: () => verify(),
    ...options,
  })
}

export const useHasSessionQuery = () => {
  const queryKey = [`/auth/has-session`]
  return useQuery({
    queryKey,
    queryFn: () => hasSession(),
  })
}

export const useForgotPasswordMutation = (
  options: MutationOptions<any, AxiosError, { email: string }>
) => {
  const mutationKey = [`/auth/forgot-password`]
  return useMutation({
    mutationKey,
    mutationFn: ({ email }: { email: string }) => forgotPassword({ email }),
    ...options,
  })
}
