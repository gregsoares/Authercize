import { loggedInUser, showLoginForm, showRegisterForm } from '../../store'
import { fetchAllUsers } from '../../utils/userControls'
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
console.debug('loggedInUser', loggedInUser)

const toggleRegister = () => {
  showRegisterForm.value = !showRegisterForm.value
}

const Header = () => {
  return (
    <header className='App-header'>
      <nav>
        <ul className='menu'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <button onClick={item.handleClick}>{item.title}</button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
