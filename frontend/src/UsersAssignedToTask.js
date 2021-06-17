import { Link } from 'react-router-dom'
import useFetch from './useFetch';

const UsersAssignedToTask = ({task_id, title}) => {

    const { data: assignedUsers, error, isPending } = useFetch("/assigned_task/task/" + task_id);

    return assignedUsers.map((user) => (
        <div className="assigned_users_list">
            <Link to={`/users/${user.username}`}>
                <h5>{user.firstname} {user.surname}</h5>
            </Link>
        </div>
    ));

}

export default UsersAssignedToTask;