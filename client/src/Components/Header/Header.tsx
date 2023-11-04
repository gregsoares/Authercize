import { useSignal } from '@preact/signals-react'
import { showLoginForm, showRegisterForm } from '../../store'
import { fetchAllUsers } from '../../utils/userControls'
import { logout } from '../../utils/userControls'

const menuItems = [
  {
    title: 'Login',
    handleClick: () => {
      console.log('Login')
      toggleLogin()
    },
  },
  {
    title: 'Register',
    handleClick: () => {
      console.log('Register')
      toggleRegister()
    },
  },
  {
    title: 'Users',
    handleClick: () => {
      fetchAllUsers()
    },
  },
]
const toggleLogin = () => {
  showLoginForm.value = !showLoginForm.value
}

const toggleRegister = () => {
  showRegisterForm.value = !showRegisterForm.value
}

const UnidentifiedUser = (): React.ReactElement<HTMLElement> => (
  <nav>
    <ul className='menu'>
      {menuItems.map((item, index) => (
        <li key={index}>
          <button onClick={item.handleClick}>{item.title}</button>
        </li>
      ))}
    </ul>
  </nav>
)

const Header = ({ userLoggedIn }) => {
  const loggedInUser = useSignal(userLoggedIn)
  console.debug('view::Header::userLoggedIn', userLoggedIn)

  console.debug('view::Header::loggedInUser', loggedInUser)
  return (
    <header className='app-header'>
      {userLoggedIn?.UUID ? (
        <>
          <section className='header-left'>
            <h1>{`Welcome ${userLoggedIn?.email}`}</h1>
          </section>
          <section className='header-right'>
            <button onClick={() => logout(userLoggedIn.UUID)}>Logout</button>
          </section>
        </>
      ) : (
        <UnidentifiedUser />
      )}
    </header>
  )
}

export default Header
