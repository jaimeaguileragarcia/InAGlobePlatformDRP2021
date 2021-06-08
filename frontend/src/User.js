import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'
import { Link } from "react-router-dom"

const User = () => {
    const {username} = useParams();
    const history = useHistory();
    
    const {data: user, error} = useFetch("/users/" + username)
    
    const handleRemove = e => {
        e.preventDefault()
        fetch("/users/" + username, {method: 'DELETE'})
            .then(()=> {history.push('/');})
      };

    return (
        <div className="user">
            <div>
                {user && <h2>{user.firstname + " " + user.surname}</h2>}
            </div>

            <div>
                {user && <h3><strong>Username: </strong>{user.username}</h3>}
                {user && <h3><strong>Email: </strong>{user.email}</h3>}           
                {user && <h3><strong>Title: </strong>{user.title}</h3>}
                {user && <h3><strong>Joined: </strong>{user.joined}</h3>}
                {user && <h3><strong>Location: </strong>{user.location}</h3>}
                {user && <h3><strong>Availability: </strong>{user.availability}</h3>}
            </div>

            <br />

            <div>
                {user && <label><strong>Bio</strong></label>}
                {user && <p>{user.bio}</p>}
            </div>
            
            <div>
                {user && <label><strong>Partnership Opportunities</strong></label>}
                {user && <p>{user.partnership_opportunities}</p>}
            </div>

            <div>
                {user && <label><strong>Interests</strong></label>}
                {user && <p>{user.interests}</p>} 
            </div>

            {user && <button onClick={handleRemove}>Delete user</button>}
            
            {user && <Link to={`/edit-user/${username}`} className="edit-user-button">Edit details</Link>}
    </div>
    );
}
 
export default User;