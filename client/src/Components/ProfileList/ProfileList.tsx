import './styles.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import paginateUsers from '../../hooks/paginateUsers'

// TODO: implement lazy loading
// TODO: implement infinite scrolling, (utility function to load more users, or add existing ones to the list)
// TODO: implement a way to sort the users by name
// TODO: implement a way to search for users
const ProfileList: React.FC = () => {
  const {
    currentUsers: displayUsers,
    getPage,
    setPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    isFinishedState,
  } = paginateUsers()

  return (
    <div className='profile-list-grid'>
      <button className='next-page' onClick={nextPage}>
        Next Page
      </button>
      {displayUsers.map(user => (
        <ProfileCard key={user.UUID} user={user} />
      ))}
    </div>
  )
}

export default ProfileList
