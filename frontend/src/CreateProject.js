import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"

const CreateProject = () => {
    const [name, setName] = useState("Input project name");
    const [desc, setDesc] = useState("Add some awesome description!");
    const [status, setStatus] = useState("Available");

    const history = useHistory();

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const newProject = {name, desc, status}

    //     fetch("http://localhost:8000/projects", {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json"},
    //         body: JSON.stringify(newProject)
    //     }).then(() => {
    //         history.push('/');
    //     })
    // }

    // const [project, setProject] = useState(null)

    // useEffect(() => {
    //     const newProject = {name, desc, status};
    //     fetch("/projects", {
    //                 method: 'POST',
    //                 headers: { "Content-Type": "application/json"},
    //                 body: JSON.stringify(newProject)
    //             }).then(() => {
    //                 history.push('/');
    //             })
    // }, []);

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
                    <option value="In Progress">In Progress</option>
                    <option value="Available">Available</option>
                    <option value="Completed">Completed</option>
                </select>
                <button>Add project</button>
            </form>
        </div>
    );
}
 
export default CreateProject;