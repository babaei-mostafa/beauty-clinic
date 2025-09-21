/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios'

let accessToken: string | null = null

function setAccessToken(token: string) {
  accessToken = token
}

function getAccessToken() {
  return accessToken
}

function clearAuth() {
  accessToken = null
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  skipAuth?: boolean
  _retry?: boolean
}

interface RefreshResponse {
  accessToken: string
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
})

// --- Extend AxiosInstance with generics + skipAuth support ---
export interface TypedAxiosInstance extends AxiosInstance {
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: CustomAxiosRequestConfig
  ): Promise<R>
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: CustomAxiosRequestConfig
  ): Promise<R>
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: CustomAxiosRequestConfig
  ): Promise<R>
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: CustomAxiosRequestConfig
  ): Promise<R>
}

export const apiClient = client as TypedAxiosInstance

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const customConfig = config as CustomAxiosRequestConfig
  const token = getAccessToken()

  if (!customConfig.skipAuth && token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      try {
        const { data } = await axios.post<RefreshResponse>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        )

        setAccessToken(data.accessToken)

        // retry original request with new token
        if (!originalRequest.skipAuth) {
          originalRequest.headers = originalRequest.headers ?? {}
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
        }

        return apiClient(originalRequest)
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError)
        clearAuth()
        return Promise.reject(new Error('UNAUTHENTICATED'))
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient
