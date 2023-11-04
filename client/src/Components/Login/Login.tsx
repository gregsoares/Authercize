import { useState } from 'react'
import Label from '../Label/Label'
import TextInput from '../TextInput/TextInput'
import Form from '../FormBuilder/FormBuilder'
import { login } from '../../utils/userControls'

type Props = {
  displayForm: boolean | null
  handleLogin?: () => void
  handleCancelForm?: () => void
}

/**
 * `Label` Component
 * @module Label
 */

/**
 * `TextInput` Component
 * @module TextInput
 */

/**
 * `Form` Component
 * @module Form
 */

/**
 * `Props` type definition
 * @typedef {Object} Props
 * @property {boolean | null} displayForm - Determines if the form should be displayed
 */

/**
 * `FormStateT` type definition
 * @typedef {Object} FormStateT
 * @property {string} [email] - Email input value
 * @property {string} [password] - Password input value
 */

/**
 * `Login` Component
 * @module Login
 * @param {Props} props - Props that get passed to the Login component
 * @returns {JSX.Element | null} The Login component
 */

const Login: React.FC<Props> = props => {
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string>('')
  const { displayForm } = props

  if (!displayForm) {
    return null
  }

  const handleLogin = e => {
    e.preventDefault()
    const loginResponse = login(email, password)
    console.debug('loginResponse', loginResponse)
    if (!loginResponse || loginResponse?.status < 400) {
      setEmail('')
      setPassword('')
      // TODO - Add toast notification
    }
  }

  const handleCancelForm = () => void 0
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
