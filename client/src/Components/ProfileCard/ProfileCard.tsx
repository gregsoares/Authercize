import './styles.css'

interface ProfileCardProps {
  user: {
    UUID: string
    name: string
    email: string
    image: string
  }
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const time = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })

  return (
    <div className='profile-card'>
      <img src={user.image} alt='profile' />

      <div className='profile-details'>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default ProfileCard
