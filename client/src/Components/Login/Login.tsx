import { useSignal } from '@preact/signals-react'
import Label from '../Label/Label'
import TextInput from '../TextInput/TextInput'
import Form from '../FormBuilder/FormBuilder'
import { login } from '../../utils/userControls'
import { showLoginForm } from '../../store'

const Login: React.FC = () => {
  const email = useSignal('johnsmith@example.com')
  const password = useSignal('1')

  if (!showLoginForm.value) {
    return null
  }

  const handleLogin = e => {
    e.preventDefault()
    const loginResponse = login(email.value, password.value)
    console.debug('loginResponse', loginResponse)
    if (loginResponse.status === 200) {
      email.value = ''
      password.value = ''
      //rerender this component
      showLoginForm.value = false
    }
    // set Error & make inputs show error State

    // TODO - Add toast notification
  }
  const handleCancelForm = () => {
    email.value = ''
    password.value = ''
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
              text={email.value}
              onChange={e => (email.value = e.target.value)}
              placeholder='Login@Email.com'
              type='email'
            />
          ),
        },
        {
          Label: <Label text='Password' />,
          Input: (
            <TextInput
              text={password.value}
              onChange={e => (password.value = e.target.value)}
              placeholder='Password'
            />
          ),
        },
      ]}
    />
  )
}

export default Login
