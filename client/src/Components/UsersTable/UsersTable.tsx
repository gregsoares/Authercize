import type { UserI, UsersTablePropsT } from '../../types'

const UsersTable = (props: UsersTablePropsT) => {
  const { users } = props

  console.debug('view::UsersTable::users', users)
  const checkUserStore = () => {}

  return (
    <div className='my-16'>
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
        <button onClick={checkUserStore}> {`Check User Store`}</button>
      </div>
    </div>
  )
}
export default UsersTable
