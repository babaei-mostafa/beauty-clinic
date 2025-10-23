export interface ILoginReq {
  email: string
  password: string
}

export interface ILoginRes {
  id: string
  role: string
  username: string
  email: string
  first_name: string
  last_name: string
}

export interface ISignupReq {
  email: string
  username: string
  password: string
  confirm_password: string
  first_name: string
  last_name: string
}

export interface ILogoutRes {
  message: string
}
