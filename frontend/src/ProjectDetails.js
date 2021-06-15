import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'
import { Link } from "react-router-dom"
import { useTracking } from 'react-tracking'

const ProjectDetails = () => {
    const { id } = useParams();
    const history = useHistory();

    const { data: project, error, isPending } = useFetch("/projects/" + id)
    const { data: assignments, errorAssignment, isPendingAssignment } = useFetch("/user_project/" + id)

    const { trackEvent } = useTracking({}, { dispatch: data => console.log(data) })



    const handleRemove = e => {

        trackEvent({
            project_id: id,
            timestamp: Date.now()
        })

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

                {project && <button onClick={handleTrack}>Track project</button>}

                {project && <Link to={`/edit-project/${project.id}`} className="edit-project-button">Edit project</Link>}
            </div>

        </div>

    );
}

export default ProjectDetails;