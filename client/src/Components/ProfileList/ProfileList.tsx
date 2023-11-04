import React from 'react'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import './styles.css'

interface User {
  UUID: string
  name: string
  email: string
  image: string
}

// TODO: implement lazy loading
// TODO: implement infinite scrolling, (utility function to load more users, or add existing ones to the list)
// TODO: implement a way to sort the users by name
// TODO: implement a way to search for users
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
