import apiClient from '@/lib/apiClient'
import { LoginReq, SignupReq } from '@/types/auth'

export const login = async (body: LoginReq): Promise<any> => {
  const url = `/api/auth/login`
  const { data } = await apiClient.post(url, body, { skipAuth: true })
  return data
}

export const signup = async (body: SignupReq): Promise<any> => {
  const url = `/api/auth/signup`
  const { data } = await apiClient.post(url, body, { skipAuth: true })
  return data
}
