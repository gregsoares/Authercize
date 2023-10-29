import { UserT, UsersTablePropsT } from '../types'

const UsersTable = (props: UsersTablePropsT) => {
  const { users } = props
  if (!users || users.length === 0) {
    return <div>No users available.</div>
  }

  return (
    <div className='my-16'>
      <table className='w-full border border-collapse border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border p-2'>Email:</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: UserT, index: number) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className='border p-2'>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default UsersTable
