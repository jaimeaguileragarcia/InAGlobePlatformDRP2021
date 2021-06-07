import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"

const CreateProject = () => {
    const [name, setName] = useState("Input project name");
    const [desc, setDesc] = useState("Add some awesome description!");
    const [status, setStatus] = useState("Available");
    const [tag, setTag] = useState("Other");
    const [location, setLocation] = useState("");
    const [drive_link, setDriveLink] = useState("Copy the link to the Google Drive folder for this project");

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault()

        const newProject = {name, desc, status};

        fetch("/projects", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newProject)
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
                />
                <label>Description</label>
                <textarea required value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                <label>Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Progress">Progress</option>
                    <option value="Available">Available</option>
                    <option value="Completed">Completed</option>
                </select>
                <label>Location</label>
                <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
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
                <label>Google Drive folder</label>
                <textarea required value={drive_link} onChange={(e) => setDriveLink(e.target.value)}></textarea>
                <button>Add project</button>
            </form>
        </div>
    );
}
 
export default CreateProject;