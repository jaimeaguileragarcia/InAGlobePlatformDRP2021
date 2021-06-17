import { useState } from "react";
import UsersAssignedToTask from "./UsersAssignedToTask";

const ProjectTaskList = ({ project_tasks }) => {
    /* pass in filtered dataset containing tasks for a specific project*/
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState(1);
    const [due_date, setDueDate] = useState(Date.now);
    const [completed, setCompleted] = useState("");
    const [project_id, setProjectId] = useState("");

    const handleComplete = task => e => {
        e.preventDefault();

        setDescription(task.description)
        setPriority(task.priority)
        setDueDate(task.due_date)
        setCompleted("Completed")
        setProjectId(task.project_id)
        const newTask = { description, priority, due_date, completed, project_id }

        console.log(newTask)

        fetch("/projects/" + task.project_id + "/tasks/" + task.id, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            window.location.reload();
        })
    
    };

    const handleDelete = task => e => {
        e.preventDefault();

        fetch("/projects/" + task.project_id + "/tasks/" + task.id, {
            method: 'DELETE',
        }).then(() => {
            window.location.reload();
        })
    };

    return (
        <div className="project-tasks-list">
            {project_tasks.map((task) => (
                <div className="project-task-preview" key={task.id}>
                        <div>
                            <h2>{task.description}</h2>
                            <h3>Due date: {task.due_date}</h3>
                        </div>
                        
                        <h3>Priority: {task.priority}</h3>
                        <h3>All volunteers assigned to this task</h3>
                        <UsersAssignedToTask task_id={task.id} />
                        { !task.completed && <button className="task-complete-button" onClick={handleComplete(task)}>Complete</button> }
                        <button className="task-delete-button"onClick={handleDelete(task)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectTaskList;
