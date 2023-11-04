import { logout } from '../../utils/userControls'

const ProfileHeader = ({ userLoggedIn }) => {
  return (
    <header className='app-header'>
      <section className='header-left'>
        <h1>{`Welcome ${userLoggedIn?.email}`}</h1>
      </section>
      <section className='header-right'>
        <button onClick={() => logout(userLoggedIn.UUID)}>Logout</button>
      </section>
    </header>
  )
}

export default ProfileHeader
