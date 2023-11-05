import staticProfileList from '../constants/staticProfileList.js'
import ProfileList from '../Components/ProfileList/ProfileList.js'

const CardList = () => {
  // split the list into 4 arrays
  const listLength = staticProfileList.length
  const oneThird = listLength / 3
  const firstList = staticProfileList.slice(0, oneThird)
  // const secondList = staticProfileList.slice(oneThird, oneThird * 2)
  // const thirdList = staticProfileList.slice(oneThird * 2, oneThird * 3)
  return (
    <div className='card-list'>
      <ProfileList users={firstList} />
    </div>
  )
}

export default CardList
