import { Link } from 'react-router-dom'
import useFetch from './useFetch';
import UsersAssignedToTask from './UsersAssignedToTask';

const MyProjectTasks = ({ tasks, title }) => {
    const FindingUsers = task_id => {
        const { data: assignedUsers, error, isPending } = useFetch("/assigned_task/task/" + task_id);
        return assignedUsers.map((user) => (
            <div className="assigned-users-list">
                <Link to={`/users/${user.username}`}>
                    <h5>{user.firstname} {user.surname}</h5>
                </Link>
            </div>
        ));
    }

    return (
        <div>
            <h2>{title}</h2>

            <div className="my-project-tasks">
                {tasks.map((task) => (
                    <div className="task-preview" key={task.id}>
                        <h2>{task.project_name}: {task.description}</h2>
                        <h3><strong>Priority level:</strong> {task.priority}</h3>
                        <h3><strong>To be done by:</strong> {task.due_date}</h3>
                        <h3>All volunteers assigned to this task: </h3>
                        <UsersAssignedToTask task_id={task.id} />
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