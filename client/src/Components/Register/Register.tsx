import { registerUser } from '../../utils/userControls'
import { showRegisterForm } from '../../store'
import { signal } from '@preact/signals-react'

const email = signal('')
const password = signal('')

const Register: React.FC = () => {
  if (!showRegisterForm.value) {
    return null
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    const registrationStatus = await registerUser(email.value, password.value)
    if (registrationStatus === void 0 || !registrationStatus) {
      return
    }
    email.value = ''
    password.value = ''
    console.debug('registrationStatus', registrationStatus)
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
            value={email.value}
            onChange={e => (email.value = e.target.value)}
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
            value={password.value}
            onChange={e => (password.value = e.target.value)}
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
