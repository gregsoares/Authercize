import { useEffect, useState } from 'react'
import './styles.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import paginateUsers from '../../hooks/paginateUsers'
import { Signal } from '@preact/signals-react'
import { useWindowScroll, useWindowSize } from 'react-use'

// TODO: implement lazy loading
// TODO: implement a way to sort the users by name
// TODO: implement a way to search for users
const halfWindowHeight = new Signal(window.innerHeight / 2)

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
  console.debug('Height from document.body', document.body.clientHeight)
  console.debug('currentWindowLocation', currentWindowLocation)
  console.debug(
    'Load more when window location passes: ',
    currentWindowLocation > document.body.clientHeight - window.innerHeight
  )

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
