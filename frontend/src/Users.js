import { useHistory } from "react-router-dom"
import UserList from './UserList'
import useFetch from './useFetch'

const Users = () => {

    const {data: users, error, isPending} = useFetch("/users")

    const history = useHistory();

    const handleReturn = e => {
        history.push('/');
    }

    return (
        <div className="users">
            <div className="ret-prev-page">
                <button onClick={handleReturn}>Back to Dashboard</button>
            </div>
            <h1>Users</h1>
            { isPending && <h2>Loading...</h2> }
            { users && <UserList users={users} title="All Users"/> }
        </div>
    );
}
 
export default Users;