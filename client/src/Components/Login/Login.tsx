import { useState } from 'react'
import Label from '../Label/Label'
import TextInput from '../TextInput/TextInput'
import Form from '../FormBuilder/FormBuilder'
import { login } from '../../utils/userControls'
import { showLoginForm } from '../../store'

type emailT = '' | string
const Login: React.FC = () => {
  const [email, setEmail] = useState<emailT>('')
  const [password, setPassword] = useState<string>('')

  if (!showLoginForm.value) {
    return null
  }

  const handleLogin = e => {
    e.preventDefault()
    const loginResponse = login(email, password)
    console.debug('loginResponse', loginResponse)
    if (!loginResponse.status || loginResponse.status < 400) {
      setEmail('')
      setPassword('')
      // TODO - Add toast notification
    }
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
