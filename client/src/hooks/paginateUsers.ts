import { profileList, usersPerPage, currentPage, isFinished } from '../store'

const paginateUsers = () => {
  const userList = profileList.value
  const usersPerPageState = usersPerPage.value
  const currentPageState = currentPage.value
  const isFinishedState = isFinished.value

  const totalPageNumber = Math.ceil(userList.length / usersPerPageState)
  const fromIndex = (currentPageState - 1) * usersPerPageState
  const toIndex = fromIndex + usersPerPageState
  const currentUsers = userList?.slice(fromIndex, toIndex)

  console.debug(fromIndex, toIndex, currentUsers)
  ;(() => {
    if (currentPageState >= totalPageNumber) {
      isFinished.value = true
    }
  })()

  const getPage = () => {
    return currentPageState
  }

  const setPage = (pageNumber: number) => {
    currentPage.value = pageNumber
  }

  const nextPage = () => {
    currentPage.value = currentPageState + 1
  }

  const prevPage = () => {
    currentPage.value = currentPageState - 1
  }

  const firstPage = () => {
    currentPage.value = 1
  }

  const lastPage = () => {
    currentPage.value = Math.ceil(userList.length / usersPerPageState)
  }

  return {
    currentUsers,
    getPage,
    setPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    isFinishedState,
  }
}

export default paginateUsers
