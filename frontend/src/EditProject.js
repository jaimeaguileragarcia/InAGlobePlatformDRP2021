import { useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import useFetch from './useFetch'

const EditProject = () => {
    const { id } = useParams();
    const { data: {name, description, status, location, tag, files}, error, isPending } = useFetch("/projects/" + id)

    const history = useHistory();
    const oldProjectDetails = {
        name: name,
        description: description,
        status: status,
        location: location,
        tag: tag,
        files: files
    }
    
    const { register, handleSubmit } = useForm({
        defaultValues: oldProjectDetails
    });

    const onSubmit = e => {
        fetch("/projects/" + id, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e)
        }).then(() => {
            history.push('/');
        })
    }

    const handleReturn = e => {
        history.push('/projects/' + id);
    }

    return (
        <div className="edit-project">
            <div className="ret-prev-page">
                <button onClick={handleReturn}>Back to Project Page</button>
            </div>
            <br />
            <h2>Edit project</h2>
            { isPending && <h2>Loading...</h2> }
            { name && <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Project name</label>
                <input {...register("name")}
                    // type="text"
                    placeholder="Insert project name here"
                    // name="name"
                />
                <label>Description</label>
                <textarea {...register("description")} name="description" placeholder="Insert description of the project here"></textarea>
                <label>Status</label>
                <select {...register("status")} name="status">
                    <option value="Progress">Progress</option>
                    <option value="Available">Available</option>
                    <option value="Completed">Completed</option>
                </select>
                <label>Location</label>
                <input
                    {...register("location")}
                    type="text"
                    placeholder="Insert location of project here"
                    name="location"
                />
                <label>Type of project</label>
                <select {...register("tag")} name="tag">
                    <option value="Social">Social</option>
                    <option value="Education">Education</option>
                    <option value="Wash">Wash</option>
                    <option value="Environment">Environment</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>
                <label>Google Drive folder</label>
                <textarea {...register("files")} name="files" placeholder="Insert Google Drive Folder link here"></textarea>
                <button type="submit">Save project details</button>
            </form> }
        </div>
    );
}

export default EditProject;