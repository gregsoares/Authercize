import React from 'react'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'

interface User {
  UUID: string
  name: string
  email: string
  image: string
}

const ProfileList: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <div className='profile-list-grid'>
      {users.map(user => (
        <ProfileCard key={user.UUID} user={user} />
      ))}
    </div>
  )
}

export default ProfileList
