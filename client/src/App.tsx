import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import './App.css'
import Header from './Components/Header/Header'
import { userLoggedIn } from './store'

function App() {
  return (
    <div className='App'>
      <Header userLoggedIn={userLoggedIn.value} />
      <main>
        {!userLoggedIn.value ? (
          <section className='app-intro'>
            <h2>App Intro</h2>
            <p>This is a simple app to demonstrate the use of signals</p>
          </section>
        ) : (
          <section className='app-landing-page'>
            <h2>Display user's page here</h2>
            <p>This is a simple app to demonstrate the use of signals</p>
            <h3>User is logged in</h3>
          </section>
        )}
        <Login />
        <Register />
      </main>
    </div>
  )
}

export default App
