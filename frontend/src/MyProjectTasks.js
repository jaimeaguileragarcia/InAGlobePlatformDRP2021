import { Link } from 'react-router-dom'

const MyProjectTasks = ({ tasks, title }) => {
    return (
        <div>
            <h2>{title}</h2>

            <div className="my-project-tasks">
                {tasks.map((task) => (
                    <div className="task-preview" key={task.id}>
                        <h2>{task.project_name}: {task.description}</h2>
                        <h3><strong>Priority level:</strong> {task.priority}</h3>
                        <h3><strong>To be done by:</strong> {task.due_date}</h3>
                        <Link to={`/projects/${task.project_id}`}>
                            <h4>Click to see the project details</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjectTasks;