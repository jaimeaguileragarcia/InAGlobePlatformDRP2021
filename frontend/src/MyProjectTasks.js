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
                        <h2>{task.description} [Priority: {task.priority}]</h2>
                        <Link to={`/projects/${task.project_id}`}>
                            <h3 style={{color: "#f1356d"}}>{task.project_name}</h3>
                        </Link>
                        <h3><strong>To be done by:</strong> {task.due_date}</h3>
                        <h3>Assigned volunteers: </h3>
                        <UsersAssignedToTask task_id={task.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjectTasks;