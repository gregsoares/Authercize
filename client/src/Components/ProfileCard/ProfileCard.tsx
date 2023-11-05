import React from 'react'
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
  return (
    <div className='profile-card'>
      <img src={user.image} alt={user.name} loading='lazy' />
      <div className='profile-details'>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default ProfileCard
