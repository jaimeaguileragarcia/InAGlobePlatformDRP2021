import { useState } from "react";
import { useHistory } from "react-router-dom"
import useFetch from './useFetch'

const CreateProject = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Available");
    const [tag, setTag] = useState("Other");
    const [location, setLocation] = useState("");
    const [files, setFiles] = useState("");
    const [selectUsers, setSelectUsers] = useState([]);
    const [username, setUsername] = useState("");

    const history = useHistory();

    const { data: users, error, isPending } = useFetch("/users")

    const handleSubmit = e => {
        e.preventDefault()

        const newProject = { name, description, status, tag, location, files };

        fetch("/projects", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProject)
        }).then(response => {
            const project_id = response.json().id
            selectUsers.map(user => {
                setUsername(user.username)
                const assign_project = { username, project_id };
    
                console.log("The username is " + {username})
                console.log("The project_id is " + {project_id})
    
                fetch("/user_project", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(assign_project)
                })
            })
        }).then(() => {
            history.push('/');
        })

    }

    return (
        <div className="create-project">
            <h2>Add a new project</h2>
            <form onSubmit={handleSubmit}>
                <label>Project name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Input project name"
                />
                <label>Description</label>
                <textarea required placeholder="Add some awesome description!" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <label>Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Progress">Progress</option>
                    <option value="Available">Available</option>
                    <option value="Completed">Completed</option>
                </select>
                <label>Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Eg: United Kingdom"
                />
                <label>Type of project</label>
                <select value={tag} onChange={(e) => setTag(e.target.value)}>
                    <option value="Social">Social</option>
                    <option value="Education">Education</option>
                    <option value="Wash">Wash</option>
                    <option value="Environment">Environment</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>
                <label>Volunteers assigned to this project</label>
                <select multiple={true} onChange={(e) => setSelectUsers(selectUsers.concat(e.target.value))} value={selectUsers} >
                    {users.map(user => <option value={user.username}>{user.firstname} {user.surname}</option>)}
                </select>
                <label>Google Drive folder</label>
                <textarea placeholder="Copy the link to the Google Drive folder for this project" value={files} onChange={(e) => setFiles(e.target.value)}></textarea>
                <button>Add project</button>
            </form>
        </div>
    );
}

export default CreateProject;