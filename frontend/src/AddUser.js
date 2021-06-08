import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"



const AddUser = () => {
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("")
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [joined, setJoined] = useState("");
    const [location, setLocation] = useState("");
    const [availability, setAvailability] = useState("");
    const [partnership_opportunities, setPartnership_opportunities] = useState("");
    const [interests, setInterests] = useState("");
    const [username, setUsername] = useState("");


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
                    placeholder="Input username here"
                />


                <label>Firstname</label>
                <input
                    type="text"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Input your first name here"
                />

                <label>Surname</label>
                <input
                    type="text"
                    required
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Input surname here"
                />

                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="State your role at InAGlobe (eg: volunteer)"
                />

                <label>Password</label>
                <input
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Input the default password (to be changed by the user)"
                />

                <label>Email</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Input InAGlobe email here"
                />


                <label>Bio</label>
                <input
                    type="text"
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell your colleagues a bit about yourself"
                />

                {/* Think about changing type to force date */}
                <label>Joined</label>
                <input
                    type="text"
                    required
                    value={joined}
                    onChange={(e) => setJoined(e.target.value)}
                    placeholder="Eg: 20th April 2020"
                />


                <label>Location</label>
                <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Where are you currently based?"
                />

                <label>Availibility</label>
                <input
                    type="text"
                    required
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    placeholder="How available are you approximately per week?"
                />

                <label>Partnership Opportunities</label>
                <input
                    type="text"
                    required
                    value={partnership_opportunities}
                    onChange={(e) => setPartnership_opportunities(e.target.value)}
                    placeholder="Eg: Department of Computing at Imperial College London"
                />

                <label>Interests</label>
                <input
                    type="text"
                    required
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    placeholder="What are your hobbies?"
                />

                <button>Add user</button>
            </form>
        </div>
    );
}

export default AddUser;