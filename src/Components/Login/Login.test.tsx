import { render, fireEvent } from '@testing-library/react'
import Login from './Login'

test('renders without crashing', () => {
  const { getByTestId } = render(<Login displayForm={true} />)
  const loginForm = getByTestId('login-form')
  expect(loginForm).toBeTruthy()
})
test('calls handleLogin when login button is clicked', () => {
  const handleLogin = jest.fn()
  const { getByTestId } = render(
    <Login displayForm={true} handleLogin={handleLogin} />
  )
  fireEvent.click(getByTestId('login-button'))
  expect(handleLogin).toHaveBeenCalled()
})

test('calls handleCancelForm when cancel button is clicked', () => {
  const handleCancelForm = jest.fn()
  const { getByTestId } = render(
    <Login displayForm={true} handleCancelForm={handleCancelForm} />
  )
  fireEvent.click(getByTestId('cancel-button'))
  expect(handleCancelForm).toHaveBeenCalled()
})
