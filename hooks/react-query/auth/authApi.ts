import apiClient from '@/lib/apiClient'
import {
  IHasSessionRes,
  ILoginReq,
  ILoginRes,
  ILogoutRes,
  ISignupReq,
  IVerifyRes,
} from '@/types/auth'

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

export const logout = async (): Promise<ILogoutRes> => {
  const url = `/api/auth/logout`
  const { data } = await apiClient.post(url)
  return data
}

export const verify = async (): Promise<IVerifyRes> => {
  const url = `/api/auth/verify`
  const { data } = await apiClient.get(url)
  return data
}

export const hasSession = async (): Promise<IHasSessionRes> => {
  const url = `/api/auth/has-session`
  const { data } = await apiClient.get(url)
  return data
}
