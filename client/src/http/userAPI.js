import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
  const {data} = await $host.post('/auth/registration', {email, password, role: 'ADMIN'})
  return jwtDecode(data.token)
}

export const login = async (email, password) => {
  const {data} = await $host.post('/auth/login', {email, password})
  return jwtDecode(data.token)
}

export const check = async () => {
  const response = await $authHost.post('/auth/registration')
  return response
}
