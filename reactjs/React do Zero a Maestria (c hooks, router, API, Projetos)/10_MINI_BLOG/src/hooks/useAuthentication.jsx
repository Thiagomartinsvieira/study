import { db } from '../firebase/config'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  function checkIfIsCancelled() {
    if (cancelled) {
      return
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled()

    setLoading(true)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.displayName,
      })

      return user
    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)

      let systemErrorMessage

      if (error.message.includes('Password')) {
        systemErrorMessage = 'Password must be at least 6 characters long.'
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'Email already registered.'
      } else {
        systemErrorMessage = 'An error occurred, please try again later.'
      }

      console.log

      setError(systemErrorMessage)
    }

    console.log(error)

    setLoading(false)
  }

  const logout = () => {
    checkIfIsCancelled()
    signOut(auth)
  }

  const login = async (data) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(true)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false)

    } catch (error) {
      let systemErrorMessage

      if (error.message.includes('user-not-found')) {
        systemErrorMessage = 'User not found'
      } else if (error.message.includes('wrong-password')) {
        systemErrorMessage = 'Wrong Password'
      } else {
        systemErrorMessage = 'An error occurred please try again later'
      }

      setError(systemErrorMessage)
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  }
}
