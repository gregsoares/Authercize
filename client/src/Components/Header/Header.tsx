import { showLoginForm, showRegisterForm, userLoggedIn } from '../../store'
import { fetchAllUsers } from '../../utils/userControls'
import ProfileHeader from './ProfileHeader'
import './styles.css'

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

const Header = (): React.ReactElement<HTMLElement> => {
  if (userLoggedIn.value) {
    return <ProfileHeader userLoggedIn={userLoggedIn.value} />
  }

  return (
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
}

export default Header
