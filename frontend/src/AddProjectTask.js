import { useState } from "react";
import { useHistory } from "react-router-dom"
import { useParams } from "react-router"
import useFetch from "./useFetch";
import Select from 'react-select';

const AddProjectTask = () => {
    const { id } = useParams();

    const [description, setDescription] = useState("");
    const [due_date, setDueDate] = useState(Date.now);
    const [priority, setPriority] = useState(1);
    const [completed, setCompleted] = useState(false);
    const [assignedUsers, setAssignedUsers] = useState([]);

    const { data: project, error, isPending } = useFetch("/projects/" + id)
    const { data: participants, errorParticipants, isPendingParticipants } = useFetch("/user_project/project_task/" + id) 

    const history = useHistory();

    const handleChange = (e) => {
        setAssignedUsers(Array.isArray(e) ? e.map(x => x.value) : []); 
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const newProjectTask = { description, due_date, priority, completed };

        const response = await fetch("/projects/" + project.id + "/tasks", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProjectTask)
        });

        const responseJSON = await response.json();
        const task_id = responseJSON.id;

        assignedUsers.map(username => {
            const assigned_task = { username, task_id };

            fetch("/assigned_task", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(assigned_task)
            });
        });

        history.push("/projects/" + id);
    }

    const handleReturn = e => {
        history.push('/projects/' + id + '/tasks');
    }

    return (
        <div className="add-project-task">
            <div className="ret-prev-page">
                <button onClick={handleReturn}>To Project Tasks</button>
            </div>
            <br />
            <h2>Add a new task</h2>
            {isPending && <h2>Loading...</h2>}
            {project && <form onSubmit={handleSubmit}>
                <label>Description</label>
                <input
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Input description here"
                />


                <label>Due Date [required]</label>
                <input
                    type="date"
                    required
                    value={due_date}
                    onChange={(e) => setDueDate(e.target.value)}
                    placeholder="Input your first name here"
                />

                <label>Priority level (1: lowest, 4: highest) [required]</label>
                <select required value={priority} onChange={(e) => setPriority(e.target.value)} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                <label>Volunteers assigned to this task</label>
                <Select
                    className="dropdown"
                    placeholder="Select Users"
                    value={participants.filter(user => assignedUsers.includes(user.value))}
                    options={participants}
                    onChange={handleChange}
                    isMulti
                    isClearable
                />

                <label>Status</label>
                <select value={completed} onChange={(e) => setCompleted(e.target.value)}>
                    <option value="Incomplete">Available</option>
                    <option value="Completed">Completed</option>
                </select>
                <button>Add task</button>
            </form>}
        </div>
    );
}

export default AddProjectTask;