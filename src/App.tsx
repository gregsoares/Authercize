import Login from './Components/Login'
import Register from './Components/Register'
import UsersTable from './Components/UsersTable'
import { useStore } from 'effector-react'
import { $users } from './store'
function App() {
  const users = useStore($users)

  return (
    <main>
      <UsersTable users={users} />
      <Login />
      <Register />
    </main>
  )
}

export default App
