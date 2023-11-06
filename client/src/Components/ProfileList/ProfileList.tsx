import { useEffect, useState } from 'react'
import './styles.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import paginateUsers from '../../hooks/paginateUsers'
import { useWindowScroll } from 'react-use'

// TODO: implement lazy loading
// TODO: implement a way to sort the users by name
// TODO: implement a way to search for users

const ProfileList: React.FC = () => {
  const {
    currentUsers,
    // getPage,
    // setPage,
    nextPage,
    // prevPage,
    // firstPage,
    // lastPage,
    // isFinishedState,
  } = paginateUsers()
  const [displayUsers, setDisplayUsers] = useState([...currentUsers])
  const { y: currentWindowLocation } = useWindowScroll()

  const isNearBottom = (): boolean => {
    if (
      currentWindowLocation >
      document.body.clientHeight - window.innerHeight * 2
    ) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (isNearBottom()) {
      nextPage()

      setDisplayUsers(prev => [...prev, ...currentUsers])
    }
  }, [currentWindowLocation])

  const handleNextPageClick = () => {
    nextPage()
    setDisplayUsers(prev => [...prev, ...currentUsers])
  }
  return (
    <div className='profile-list-grid'>
      <button className='next-page' onClick={handleNextPageClick}>
        Next Page
      </button>
      {displayUsers.map(user => (
        <ProfileCard key={user.UUID + user} user={user} />
      ))}
    </div>
  )
}

export default ProfileList
