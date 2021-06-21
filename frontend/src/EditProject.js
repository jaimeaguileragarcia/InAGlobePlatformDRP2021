import { useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import useFetch from './useFetch'
import Select from 'react-select'

const EditProject = () => {
    const { id } = useParams();
    const { data: { name, description, status, location, tag, files }, error, isPending } = useFetch("/projects/" + id)
    const [selectUsernames, setSelectUsernames] = useState([]);
    const { data: users, errorUsers, isPendingUsers } = useFetch("/users/user_project");

    const history = useHistory();
    
    const { register, handleSubmit } = useForm();

    const handleChange = (e) => {
        setSelectUsernames(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const onSubmit = e => {
        fetch("/projects/" + id, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e)
        }).then(() => {
            selectUsernames.map(username => {
                const assign_project = { username: username, project_id: id };

                fetch("/user_project", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(assign_project)
                });
            });
        }).then(() => {
            history.push('/projects');
        })
    }

    const handleReturn = e => {
        history.push('/projects/' + id);
    }

    return (
        <div className="edit-project">
            <div className="ret-prev-page">
                <button onClick={handleReturn}>To Project Page</button>
            </div>
            <br />
            <h2>Edit project</h2>
            {isPending && <h2>Loading...</h2>}
            {name && <form onSubmit={handleSubmit(onSubmit)}>
                <label>Project name</label>
                <input
                    {...register("name")}
                    placeholder="Insert project name here"
                    type="text"
                    defaultValue={name}
                />
                <label>Description</label>
                <textarea {...register("description")} placeholder="Insert description of the project here" defaultValue={description}></textarea>
                <label>Status</label>
                <select {...register("status")} defaultValue={status}>
                    <option value="Progress">Progress</option>
                    <option value="Available">Available</option>
                    <option value="Completed">Completed</option>
                </select>
                <label>Location</label>
                <input
                    {...register("location")}
                    type="text"
                    placeholder="Insert location of project here"
                    defaultValue={location}
                />
                <label>Type of project</label>
                <select {...register("tag")} defaultValue={tag}>
                    <option value="Social">Social</option>
                    <option value="Education">Education</option>
                    <option value="Wash">Wash</option>
                    <option value="Environment">Environment</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>
                <label>Volunteers assigned to this project</label>
                <Select
                    className="dropdown"
                    placeholder="Select Users"
                    value={users.filter(user => selectUsernames.includes(user.value))}
                    options={users}
                    onChange={handleChange}
                    isMulti
                    isClearable
                />
                <label>Google Drive folder</label>
                <textarea {...register("files")} placeholder="Insert Google Drive Folder link here" defaultValue={files}></textarea>
                <button type="submit">Save project details</button>
            </form>}
        </div>
    );
}

export default EditProject;