import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'
import { Link } from "react-router-dom"
import useToken from './useToken';

const User = () => {
    const {username} = useParams();
    const history = useHistory();
    const {setToken, token} = useToken();
    
    const {data: user, error, isPending} = useFetch("/users/" + username)
    
    const handleRemove = e => {
        e.preventDefault()
        fetch("/users/" + username, {method: 'DELETE'})
            .then(()=> {history.push('/');})
      };

    return (
        <div className="user">
            { isPending && <h2>Loading...</h2> }
            { user && <div>
                <h2>{user.firstname + " " + user.surname}</h2>
            </div> }

            { user && <div>
                <h3><strong>Username: </strong>{user.username}</h3>
                <h3><strong>Email: </strong>{user.email}</h3>       
                <h3><strong>Title: </strong>{user.title}</h3>
                <h3><strong>Joined: </strong>{user.joined}</h3>
                <h3><strong>Location: </strong>{user.location}</h3>
                <h3><strong>Availability: </strong>{user.availability}</h3>
            </div> }

            <br />

            { user && <div>
                <label><strong>Bio</strong></label>
                <p>{user.bio}</p>
            </div> }
            
            { user && <div>
                <label><strong>Partnership Opportunities</strong></label>
                <p>{user.partnership_opportunities}</p>
            </div> }

            { user && <div>
                <label><strong>Interests</strong></label>
                <p>{user.interests}</p>
            </div> }

            { user && (username == "jaimeaguilera" || username == token) && <button onClick={handleRemove}>Delete user</button> }
            
            { user && (username == "jaimeaguilera" || username == token) && <Link to={`/edit-user/${username}`} className="edit-user-button">Edit details</Link> }
    </div>
    );
}
 
export default User;