import UserList from './UserList'
import useFetch from './useFetch'

const Users = () => {

    const {data: users, error, isPending} = useFetch("/users")

    return (
        <div className="users">
            <h1>Users</h1>
            { isPending && <h2>Loading...</h2> }
            { users && <UserList users={users} title="All Users"/> }
        </div>
    );
}
 
export default Users;