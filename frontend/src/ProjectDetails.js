import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'
import { Link } from "react-router-dom"

const ProjectDetails = () => {
    const { id } = useParams();
    const history = useHistory();

    const { data: project, error, isPending } = useFetch("/projects/" + id)
    const { data: assignments, errorAssignment, isPendingAssignment } = useFetch("/user_project/project/" + id)

    const handleRemove = e => {
        e.preventDefault()
        fetch("/projects/" + id, { method: 'DELETE' })
            .then(() => { history.push('/'); })
    };

    const handleReturn = e => {
        history.push('/');
    }

    return (
        <div className="project-details">
            <div className="ret-prev-page">
                <button onClick={handleReturn}>To Dashboard</button>
            </div>
            <br />
            { isPending && <h2>Loading...</h2> }
            { project && <h2>{project.name}</h2> }
            { project && <button style={{
                fontSize: '20px',
                color: '#fff',
                marginBottom: '30px',
                marginright: '10px',
                borderRadius: '8px',
                backgroundColor: '#f1b535',
                cursor: 'default'
            }}>Status: {project.status}</button>}
            {project && <button style={{
                fontSize: '20px',
                color: '#fff',
                marginBottom: '30px',
                marginRight: '10px',
                borderRadius: '8px',
                backgroundColor: '#595bc0',
                cursor: 'default'
            }}>{project.tag}</button>}
            {project && <h4>Location: {project.location}</h4>}
            {project && <button onClick={(e) => {
                e.preventDefault();
                window.open(project.files, "_blank");
            }}>Documents</button>}
            {project && <p>{project.description}</p>}

            <h3>Volunteers working on this project</h3>
            <div className="project_user_assignment_list">
                {assignments.map(a => (
                    <div className="assigned_users_preview" style={{float: "left", width: "50%"}} key={a.id}>
                        <Link to={`/users/${a.username}`}>
                            <h4>{a.username}</h4>
                        </Link>
                    </div>)
                )
                }
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