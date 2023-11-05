import { LazyLoadImage } from 'react-lazy-load-image-component'
// import ProfileCard from '../ProfileCard/ProfileCard'
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
        <LazyLoadImage
          key={user.UUID}
          src={user.image}
          alt={user.name}
          loading='lazy'
          effect='blur'
          wrapperClassName='profile-list-grid-item'
          placeholder={<p>Loading...</p>}
          placeholderSrc='https://via.placeholder.com/150'
        />
      ))}
    </div>
  )
}

export default ProfileList
