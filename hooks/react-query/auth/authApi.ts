import apiClient from '@/lib/apiClient'
import { ILoginReq, ILoginRes, ISignupReq } from '@/types/auth'

export const login = async (body: ILoginReq): Promise<ILoginRes> => {
  const url = `/api/auth/login`
  const { data } = await apiClient.post(url, body, { skipAuth: true })
  return data
}

export const signup = async (body: ISignupReq): Promise<any> => {
  const url = `/api/auth/signup`
  const { data } = await apiClient.post(url, body, { skipAuth: true })
  return data
}
