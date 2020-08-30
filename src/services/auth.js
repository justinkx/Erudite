import getFirebase from "../utils/firebase"
import "firebase/auth"

export const isBrowser = () => typeof window !== "undefined"

export const isLoggedIn = () => {
  const user = getUser()
  return !!user
}
export const getUser = () =>
  isBrowser() && getFirebase().auth() ? getFirebase().auth().currentUser : null
