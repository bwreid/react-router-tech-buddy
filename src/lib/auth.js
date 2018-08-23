import axios from 'axios'
const BASE_URL = `http://localhost:5000`
const TOKEN_NAME = 'tech-buddy'

const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/token`, { username, password })
    const token = response.data.token
    localStorage.setItem(TOKEN_NAME, token)
    return true
  } catch (e) {
    console.error(e.response)
    return false
  }
}

const verify = async () => {
  const token = localStorage.getItem(TOKEN_NAME)
  if (!token) return false
  try {
    const response = await axios(`${BASE_URL}/auth/token`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (e) {
    console.error(e)
    return false
  }
}

const logout = () => {
  localStorage.removeItem(TOKEN_NAME)
}

export default { login, verify, logout }
