import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import './App.css'
import Header from './Components/Header/Header'
import { userLoggedIn } from './store'
import CardList from './Pages/CardList'

// TODO: Make a router/controller to show the correct page based on the user's logged in status
function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        {!userLoggedIn.value ? (
          <section className='app-intro'>
            <h2>App Intro</h2>
            <p>This is a simple app to demonstrate the use of signals</p>
          </section>
        ) : (
          <CardList />
        )}
        <Login />
        <Register />
      </main>
    </div>
  )
}

export default App
