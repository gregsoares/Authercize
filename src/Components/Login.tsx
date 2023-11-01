// Login.tsx

import React, { useState } from 'react'
import Label from './Label/Label'
import TextInput from './TextInput/TextInput'
import Form from './FormBuilder/FormBuilder'
import { loginAuth } from '../utils/userControls'

type Props = {
  displayForm: boolean | null
}

const Login: React.FC<Props> = props => {
  const { displayForm } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!displayForm) {
    return null
  }

  const handleLogin = () => {
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
          Label: <Label text='Email' />,
          Input: (
            <TextInput
              text={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Login@Email.com'
              type='email'
            />
          ),
        },
        {
          Label: <Label text='Password' />,
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
