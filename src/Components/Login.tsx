// Login.tsx

import React, { useState } from 'react'
import Label from './Label/Label'
import TextInput from './TextInput/TextInput'
import Form from './FormBuilder/FormBuilder'
import { loginAuth } from '../utils/userControls'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    loginAuth(email, password)
      .then(res => {
        console.debug(res)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const handleCancelForm = () => {
    setEmail('')
    setPassword('')
  }
  return (
    <Form
      onSubmit={handleLogin}
      onCancel={handleCancelForm}
      formSection={[
        {
          Label: <Label text='Email' size='text-2xl' />,
          Input: (
            <TextInput
              text={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Login@Email.com'
            />
          ),
        },
        {
          Label: <Label text='Password' size='text-2xl' />,
          Input: (
            <TextInput
              text={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
            />
          ),
        },
      ]}
    />
  )
}

export default Login
