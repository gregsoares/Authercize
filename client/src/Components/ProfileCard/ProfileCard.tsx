import { LazyLoadImage } from 'react-lazy-load-image-component'
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
  //make a const to display current time down to miliseconds with 3 digits
  const time = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })

  return (
    <div className='profile-card'>
      <LazyLoadImage
        src={user.image}
        alt={user.name}
        placeholder={<div>Loading ...</div>}
        placeholderSrc='https://via.placeholder.com/50'
      />
      <div className='profile-details'>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default ProfileCard
