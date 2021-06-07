import { useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import useFetch from './useFetch'

const EditProject = () => {
    const {id} = useParams();
    const {data: project, error} = useFetch("/projects/" + id)
    const [name, setName] = useState([project.name]);
    const [description, setDescription] = useState([project.description]);
    const [status, setStatus] = useState(project.status);
    const [tag, setTag] = useState(project.tag);
    const [location, setLocation] = useState(project.location);
    const [files, setFiles] = useState(project.files);

    const newProject = {name, description, status, tag, location, files};

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault()

        fetch("/projects/" + id, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newProject)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="edit-project">
            <h2>Edit project</h2>
            <form onSubmit={handleSubmit}>
                <label>Project name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
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
                <textarea value={files} onChange={(e) => setFiles(e.target.value)}></textarea>
                <button>Save</button>
            </form>
        </div>
    );
}
 
export default EditProject;