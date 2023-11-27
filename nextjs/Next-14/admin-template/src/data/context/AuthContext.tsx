import { createContext, ReactNode } from 'react' // Import ReactNode
import firebase from '../../firebase/config'
import User from '../../model/User'
import { useState } from 'react'
import { useRouter } from 'next/router' // Import useRouter

interface AuthContextProps {
  user?: User
  loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined) // Provide an initial value

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId, // Fix the array indexing
    imageUrl: firebaseUser.photoURL,
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter() // Initialize useRouter

  async function loginGoogle() {
    console.log('login google....')
    // Add your Google login logic here
    // For example, you can use Firebase authentication
    // and then normalize the user using the normalizedUser function
    // const firebaseUser = await yourGoogleLoginFunction();
    // const normalized = await normalizedUser(firebaseUser);
    // setUser(normalized);
    router.push('/')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
