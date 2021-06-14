import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'
import useToken from './useToken';

const MyProfile = () => {
    const {setToken, token} = useToken();
    
    const {data: user, error, isPending} = useFetch("/users/" + token)
    

    return (
        <div className="my-profile">
            { isPending && <h2>Loading...</h2> }
            { user && <h2>{user.firstname + " " + user.surname}</h2> }
            { user && <h1>{"Username: " + user.token}</h1> }
            { user && <h1>{"Title: " + user.title}</h1> }
            { user && <h1>{"Email: " + user.email}</h1> }
            { user && <h1>{"Bio: " + user.bio}</h1> }
            { user && <h1>{"Joined: " + user.joined}</h1> }
            { user && <h1>{"Location: " + user.location}</h1> }
            { user && <h1>{"Availability: " + user.availability}</h1> }
            { user && <h1>{"Partnership Opportunities: " + user.partnership_opportunities}</h1> }
            { user && <h1>{"Interests: " + user.interests}</h1> }    
        </div>
    );
}

export default MyProfile;