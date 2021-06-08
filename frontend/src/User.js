import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'

const User = () => {
    const {username} = useParams();
    const history = useHistory();
    
    const {data: user, error} = useFetch("/users/" + username)
    

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
    </div>
    );
}
 
export default User;