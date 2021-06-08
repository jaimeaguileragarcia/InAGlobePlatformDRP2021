import { Link } from 'react-router-dom'

const UserList = ({ users }) => {

    return (
        <div className="user-list">

            {users.map((user) => (
                <div className="user-preview" key={user.username}>
                    <Link to={`/users/${user.username}`}>
                        <h2>{user.username}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default UserList;
