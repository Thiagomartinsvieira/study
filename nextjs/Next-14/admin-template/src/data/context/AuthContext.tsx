import { createContext, ReactNode, useEffect } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

interface AuthContextProps {
  user?: User
  loading?: boolean
  loginGoogle?: () => Promise<void>
  login?: (email: string, password: string) => Promise<void>
  register?: (email: string, password: string) => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.photoURL,
  }
}

function manageCookie(logged: boolean) {
  if (logged) {
    Cookies.set('admin-template-cod3r-auth', 'true', {
      expires: 7,
    })
  } else {
    Cookies.remove('admin-template-cod3r-auth')
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  async function configureSession(firebaseUser: firebase.User | null) {
    if (firebaseUser?.email) {
      const user = await normalizedUser(firebaseUser)
      setUser(user)
      manageCookie(true)
      setLoading(false)
      return user.email
    } else {
      setUser(null)
      manageCookie(false)
      setLoading(false)
      return false
    }
  }

  const router = useRouter()

  const login = async (email, password) => {
    try {
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

      await configureSession(resp.user)
      router.push('/')
    } catch (error) {
      console.error('Google login failed:', error.message)
    }
  }

  const register = async (email, password) => {
    try {
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      await configureSession(resp.user)
      router.push('/')
    } catch (error) {
      console.error('Google login failed:', error.message)
    }
  }

  const loginGoogle = async () => {
    try {
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())

      await configureSession(resp.user)
      router.push('/')
    } catch (error) {
      console.error('Google login failed:', error.message)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await configureSession(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configureSession)
      return () => cancel()
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginGoogle,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
