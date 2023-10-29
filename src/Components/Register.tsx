// Register.tsx

import React, { useState } from 'react'

const Register: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setEmail('')
        setPassword('')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='w-1/3 mx-auto mt-10'>
      <h2 className='text-2xl font-semibold mb-4'>Register</h2>
      <form onSubmit={handleRegister}>
        <div className='mb-4'>
          <label htmlFor='email' className='block font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full p-2 border rounded'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block font-medium'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full p-2 border rounded'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='w-full p-2 bg-green-500 text-white font-semibold rounded'
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
