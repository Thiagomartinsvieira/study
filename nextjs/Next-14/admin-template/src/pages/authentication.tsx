import AuthInput from '@/components/auth/AuthInput'
import { AttentionIcon } from '@/components/icons'
import React, { useState } from 'react'

const authentication = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const displayError = (msg, timeInSeconds = 5) => {
    setError(msg)
    setTimeout(() => setError(null), timeInSeconds * 1000)
  }

  const submit = () => {
    if (mode === 'login') {
      console.log('login')
      displayError('An error has occurred')
    } else {
      console.log('register')
      displayError('An error has occurred')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="authentication screen image"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:1/3">
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'login'
            ? 'Log in with your account'
            : 'Register on the platform'}
        </h1>

        {error ? (
          <div
            className={`
          flex items-center 
          bg-red-400 text-white py-3 px-5 my-2
          border border-red-700 rounded-lg
        `}
          >
            {AttentionIcon()}
            <span className="ml-3">{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          value={email}
          onChange={setEmail}
          type="email"
          mandatory
        />
        <AuthInput
          label="Password"
          value={password}
          onChange={setPassword}
          type="password"
          mandatory
        />
        <button
          onClick={submit}
          className={`w-full bg-indigo-500 hover:bg-indigo-400
           text-white rounded-lg px-4 py-3 mt-6`}
        >
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={submit}
          className={`w-full bg-red-500 hover:bg-red-400
           text-white rounded-lg px-4 py-3`}
        >
          Sign in with Google
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Are you new here?
            <a
              onClick={() => setMode('register')}
              className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer
            `}
            >
              {' '}
              Create an account for free
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Already have an account?
            <a
              onClick={() => setMode('login')}
              className={`
            text-blue-500 hover:text-blue-700 font-semibold
            cursor-pointer
          `}
            >
              {' '}
              Login with your credentials
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default authentication
