import { Button } from '../stories/Button'
import type { UserI, UsersTablePropsT } from '../types'
import { useStore } from 'effector-react'
import { $users } from '../store'

const UsersTable = (props: UsersTablePropsT) => {
  const { users } = props
  const usersFromStore = useStore($users)

  console.debug('view::UsersTable::users', users)
  const checkUserStore = () => {
    console.debug(
      'view::UsersTable::checkUserStore::usersFromStore',
      usersFromStore
    )
  }

  return (
    <div className='my-16'>
      {/* make a padded section with a button to display Users */}
      <h2 className='text-2xl font-semibold mb-4'>Users</h2>
      <table className='w-full border border-collapse border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border p-2'>Email:</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: UserI, index: number) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className='border p-2'>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {' '}
        <Button
          label='Check Store'
          backgroundColor='gray'
          onClick={checkUserStore}
        />{' '}
      </div>
    </div>
  )
}
export default UsersTable
