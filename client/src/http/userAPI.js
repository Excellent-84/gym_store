import { $authHost, $host } from ".";

export const registration = async (email, password) => {
  const response = await $host.post('auth/registration', {email, password, role: 'ADMIN'})
  return response
}

export const login = async (email, password) => {
  const response = await $host.post('auth/login', {email, password})
  return response
}

export const check = async () => {
  const response = await $authHost.post('auth/registration')
  return response
}
