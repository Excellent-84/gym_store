import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {

  try {
    const {data} = await $host.post('/auth/registration', { email, password, role: 'ADMIN' });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}

export const login = async (email, password) => {
  const {data} = await $host.post('/auth/login', {email, password});
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}

export const check = async () => {
  const {data} = await $authHost.get('/auth'); // auth/registration ???
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}
