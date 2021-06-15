import UserList from './UserList'
import useFetch from './useFetch'
import useToken from './useToken'
import { Link } from 'react-router-dom'

const Users = () => {

    const {data: users, error, isPending} = useFetch("/users")
    const {setToken, token} = useToken();

    return (
        <div className="users">
            <h1>Users</h1>
            { token == "jaimeaguilera" && <Link to={`/add-user`} className="add-user-button">Add User</Link> }
            <br />
            <br />
            { isPending && <h2>Loading...</h2> }
            { users && <UserList users={users} title="All Users"/> }
        </div>
    );
}
 
export default Users;