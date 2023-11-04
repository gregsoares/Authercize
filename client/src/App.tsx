import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import './App.css'
import Header from './Components/Header/Header'

// FIXME: Add Signal dependencies to props
function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <h1>Welcome to Our Landing Page</h1>
        <p>
          This is a simple landing page built with React, TypeScript, and CSS.
        </p>

        <Login />
        <Register />
      </main>
    </div>
  )
}

export default App
