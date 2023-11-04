import ProfileList from '../Components/ProfileList/ProfileList.js'
import staticProfileList from '../constants/staticProfileList.js'
import './styles.css'

const CardList = () => {
  return (
    <div className='card-list'>
      <ProfileList users={staticProfileList} />
    </div>
  )
}

export default CardList
