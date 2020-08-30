export const isBrowser = typeof window !== "undefined" ? true : false
export const setCredentials = ({ email, password }) => {
  if (isBrowser) {
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
  }
}
export const getCredentials = () => {
  const email = localStorage.getItem("email")
  const password = localStorage.getItem("password")
  return {
    email,
    password,
  }
}
