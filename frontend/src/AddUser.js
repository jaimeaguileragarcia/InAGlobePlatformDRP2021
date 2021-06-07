import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"



const AddUser = () => {
    const [firstname, setFirstname] = useState("Input project name");
    const [surname, setSurname] = useState("Input surname");
    const [password, setPassword] = useState("Input password");
    const [mail, setMail] = useState("Input email");
    const [bio, setBio] = useState("Input short bio");
    const [joined, setJoined] = useState("Input joined date");
    const [location, setLocation] = useState("Input location");
    const [availability, setAvailability] = useState("Input availibility");
    const [partnership_opportunities, setPartnership_opportunities] = useState("Input partners");
    const [interests, setInterets] = useState("Input interests");
    const [username, setUsername] = useState("Input username");


    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault()

        const newUser = {firstname,
            surname, 
            password, 
            mail, 
            bio, 
            joined, 
            location, 
            availibility, 
            partnership_opportunities, 
            interests,
            username
        }

        fetch("/users", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="add-user">
            <h2>Add a new user</h2>
            <form onSubmit={handleSubmit}>
                <label>Firstname</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setFirstname(e.target.value)}
                />

                <label>Surname</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setSurname(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>Mail</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setMail(e.target.value)}
                />


                <label>Bio</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setBio(e.target.value)}
                />

                <label>Joined</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <label>Location</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>Availibility</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>Parntership Opportunities</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>interests</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setPassword(e.target.value)}
                />

<               label>Usernam</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setPassword(e.target.value)}
                />


             
                <button>Add user</button>
            </form>
        </div>
    );
}
 
export default AddUser;