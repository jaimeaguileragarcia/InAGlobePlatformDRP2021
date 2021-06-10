import { useState } from "react";

const ProjectTaskList = ({ project_tasks }) => {
    /* pass in filtered dataset containing tasks for a specific project*/

    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState(1);
    const [due_date, setDueDate] = useState(Date.now);
    const [completed, setCompleted] = useState("");
    const [project_id, setProjectId] = useState("");

    const handleComplete = task => e => {
        e.preventDefault();
        console.log(task.id)

        setDescription(task.description)
        setPriority(task.priority)
        setDueDate(task.due_date)
        setCompleted("Completed")
        setProjectId(task.project_id)
        const newTask = { description, priority, due_date, completed, project_id }

        console.log(newTask)

        fetch(("/projects/" + task.project_id + "/tasks/" + task.id, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }))
    };

    const handleDelete = task => e => {
        e.preventDefault();
        fetch(("/projects/" + task.project_id + "/tasks/" + task.id, {
            method: 'DELETE'
        }))
    };

    return (
        <div className="project-tasks-list">
            {project_tasks.map((task) => (
                <div className="preview" key={task.id}>
                        <div>
                            <h2>{task.description}</h2>
                            <h3>{task.due_date}</h3>
                        </div>
                        
                        <h3>{task.priority}</h3>
                        <button onClick={handleComplete(task)}>Complete</button>
                        <button onClick={handleDelete(task)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectTaskList;
