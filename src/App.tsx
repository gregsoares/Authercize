import { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import UsersTable from './Components/UsersTable'
import { fetchAllUsers } from './utils/userControls'
import { UserT } from './types'

function App() {
  const [users, setUsers] = useState<UserT[]>([])
  const showAllUsers = async () => {
    fetchAllUsers().then(allUsers => {
      setUsers(allUsers === undefined ? [] : [...allUsers!])
    })
  }

  return (
    <div className='bg-black'>
      <UsersTable users={users} />
      <button
        className='p-2 bg-green-500 text-white font-semibold rounded'
        onClick={showAllUsers}
      >
        Show All Users
      </button>
      <Login />
      <Register />
    </div>
  )
}

export default App
