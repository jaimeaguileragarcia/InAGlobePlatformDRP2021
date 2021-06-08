import { useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import useFetch from './useFetch'

const EditProject = () => {
    const { id } = useParams();
    const { data: project, error } = useFetch("/projects/" + id)

    const history = useHistory();
    const oldProjectDetails = {
        project_name: project.name,
        description: project.description,
        status: project.status,
        location: project.location,
        tag: project.tag,
        files: project.files
    }
    const { register, handleSubmit } = useForm({
        defaultValues: oldProjectDetails
    });

    const onSubmit = e => {
        e.preventDefault()
      
        fetch("/projects/" + id, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="edit-project">
            <h2>Edit project</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="project_name">Project name</label>
                <input {...register("project_name")}
                    // type="text"
                    placeholder="Insert project name here"
                    // name="project_name"
                />
                <label>Description</label>
                <textarea name="description" placeholder="Insert description of the project here"></textarea>
                <label>Status</label>
                <select name="status">
                    <option value="Progress">Progress</option>
                    <option value="Available">Available</option>
                    <option value="Completed">Completed</option>
                </select>
                <label>Location</label>
                <input
                    type="text"
                    placeholder="Insert location of project here"
                    name="location"
                />
                <label>Type of project</label>
                <select name="tag">
                    <option value="Social">Social</option>
                    <option value="Education">Education</option>
                    <option value="Wash">Wash</option>
                    <option value="Environment">Environment</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>
                <label>Google Drive folder</label>
                <textarea name="files" placeholder="Insert Google Drive Folder link here"></textarea>
                <button type="submit">Save project details</button>
            </form>
        </div>
    );
}

export default EditProject;