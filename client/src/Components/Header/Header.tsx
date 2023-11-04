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

const toggleRegister = () => {
  showRegisterForm.value = !showRegisterForm.value
}

const unidentifiedUser = () => (
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

// FIXME: Add Signal dependencies to props

const Header = () => {
  console.debug('view::Header::loggedInUser', loggedInUser.getUser())
  return (
    <header className='app-header'>
      {loggedInUser.getUser() ? (
        <>
          {/* //2 header sections, one takes up 70% vw, the other displays a button aligned right */}
          <section className='header-left'>
            <h1>{`Welcome ${loggedInUser.getUser()?.email}`}</h1>
          </section>
          <section className='header-right'>
            <button onClick={() => loggedInUser.logout()}>Logout</button>
          </section>
        </>
      ) : (
        unidentifiedUser()
      )}
    </header>
  )
}

export default Header
