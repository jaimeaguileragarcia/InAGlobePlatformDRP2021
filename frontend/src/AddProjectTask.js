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
    const participants = [
        {
            "value": "john34",
            "label": "John Smith"
        },
        {
            "value": "rs0408",
            "label": "JRahil Shah"
        },{
            "value": "ew1234",
            "label": "Ethan Weitzman"
        }
    ]

    const history = useHistory();

    const handleChange = (e) => {
        setAssignedUsers(Array.isArray(e) ? e.map(x => x.value) : []); 
    }

    const handleSubmit = e => {
        e.preventDefault()

        const newProjectTask = {
            description,
            due_date,
            priority,
            completed
        }

        fetch("/projects/" + project.id + "/tasks", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProjectTask)
        }).then(() => {
            history.push('/projects/' + id + '/tasks');
        })
    }

    return (
        <div className="add-project-task">
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


                <label>Due Date</label>
                <input
                    type="date"
                    required
                    value={due_date}
                    onChange={(e) => setDueDate(e.target.value)}
                    placeholder="Input your first name here"
                />

                <label>Priority</label>
                <input
                    type="text"
                    required
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    placeholder="Input priority here"
                />

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