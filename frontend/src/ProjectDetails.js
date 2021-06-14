import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'
import { Link } from "react-router-dom"

const ProjectDetails = () => {
    const { id } = useParams();
    const history = useHistory();

    const { data: project, error, isPending } = useFetch("/projects/" + id)
    const { data: user_project_assignments, errorAssignment, isPendingAssignment } = useFetch("/user_project")

    const users = user_project_assignments.filter(user_project => (user_project.id === id))

    const handleRemove = e => {
        e.preventDefault()
        fetch("/projects/" + id, { method: 'DELETE' })
            .then(() => { history.push('/'); })
    };

    return (
        <div className="project-details">
            {isPending && <h2>Loading...</h2>}
            {project && <h2>{project.name}</h2>}
            {project && <button style={{
                fontSize: '20px',
                color: '#fff',
                marginBottom: '30px',
                marginright: '10px',
                borderRadius: '8px',
                backgroundColor: '#f1b535'
            }}>Status: {project.status}</button>}
            {project && <button style={{
                fontSize: '20px',
                color: '#fff',
                marginBottom: '30px',
                marginRight: '10px',
                borderRadius: '8px',
                backgroundColor: '#595bc0'
            }}>{project.tag}</button>}
            {project && <h4>Location: {project.location}</h4>}
            {project && <button onClick={(e) => {
                e.preventDefault();
                window.open(project.files, "_blank");
            }}>Documents</button>}
            {project && <p>{project.description}</p>}

            <h2>Volunteers working on this project</h2>
            <div>
                {users.map((username) => (
                    <div key={username}>
                        <div>
                            <h2>{username}</h2>
                        </div>
                    </div>
                ))}

            </div>

            <div className="project-tasks">
                {project && <Link to={`/projects/${project.id}/tasks`} className="view-tasks-button">View Tasks</Link>}

                {project && <Link to={`/projects/${project.id}/add-task`} className="add-task-button">Add Task</Link>}
            </div>

            <div>
                {project && <button onClick={handleRemove}>Delete project</button>}

                {project && <Link to={`/edit-project/${project.id}`} className="edit-project-button">Edit project</Link>}
            </div>

        </div>

    );
}

export default ProjectDetails;