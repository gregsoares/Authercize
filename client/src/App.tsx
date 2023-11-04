import React from 'react'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import './App.css'
import { fetchAllUsers } from './utils/userControls'

function App() {
  const [showLogin, setShowLogin] = React.useState(false)
  const [showRegister, setShowRegister] = React.useState(false)

  const toggleLogin = () => {
    setShowLogin(!showLogin)
  }

  const toggleRegister = () => {
    setShowRegister(!showRegister)
  }

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

  return (
    <div className='App'>
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
      <main>
        <h1>Welcome to Our Landing Page</h1>
        <p>
          This is a simple landing page built with React, TypeScript, and CSS.
        </p>

        <Login displayForm={showLogin} />
        <Register displayForm={showRegister} />
      </main>
    </div>
  )
}

export default App
