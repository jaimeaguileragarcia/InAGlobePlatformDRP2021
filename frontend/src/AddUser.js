import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"



const AddUser = () => {
    const [firstname, setFirstname] = useState("Input project name");
    const [surname, setSurname] = useState("Input surname");
    const [password, setPassword] = useState("Input password");
    const [title, setTitle] = useState("Input title")
    const [email, setEmail] = useState("Input email");
    const [bio, setBio] = useState("Input short bio");
    const [joined, setJoined] = useState("Input joined date");
    const [location, setLocation] = useState("Input location");
    const [availability, setAvailability] = useState("Input availibility");
    const [partnership_opportunities, setPartnership_opportunities] = useState("Input partners");
    const [interests, setInterests] = useState("Input interests");
    const [username, setUsername] = useState("Input username");


    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault()

        const newUser = {
            firstname,
            surname,
            password,
            title,
            email,
            bio,
            joined,
            location,
            availability,
            partnership_opportunities,
            interests,
            username
        }

        fetch("/users", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="add-user">
            <h2>Add a new user</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />


                <label>Firstname</label>
                <input
                    type="text"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />

                <label>Surname</label>
                <input
                    type="text"
                    required
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />

                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                <label>Bio</label>
                <input
                    type="text"
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />

                <label>Joined</label>
                <input
                    type="text"
                    required
                    value={joined}
                    onChange={(e) => setJoined(e.target.value)}
                />


                <label>Location</label>
                <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <label>Availibility</label>
                <input
                    type="text"
                    required
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                />

                <label>Partnership Opportunities</label>
                <input
                    type="text"
                    required
                    value={partnership_opportunities}
                    onChange={(e) => setPartnership_opportunities(e.target.value)}
                />

                <label>Interests</label>
                <input
                    type="text"
                    required
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                />



                <button>Add user</button>
            </form>
        </div>
    );
}

export default AddUser;