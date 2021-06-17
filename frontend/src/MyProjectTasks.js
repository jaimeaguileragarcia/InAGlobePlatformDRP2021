import useFetch from './useFetch'
import { useState } from "react";

const MyProjectTasks = ({ tasks, title }) => {
    return (
        <div>
            <h2>{title}</h2>

            <div className="my-project-tasks">
                {tasks.map((task) => (
                    <div className="task-preview" key={task.id}>
                        <h2>{task.description}</h2>
                        <h3><strong>Priority level:</strong> {task.priority}</h3>
                        <h3><strong></strong> {task.priority}</h3>
                        <h3><strong>To be done by:</strong> {task.due_date}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjectTasks;