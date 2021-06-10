import { Link } from 'react-router-dom'

const ProjectTaskList = ({ project_tasks }) => {
/* pass in filtered dataset containing tasks for a specific project*/
    return (
        <div className="project-tasks-list">

            {project_tasks.map((task) => (
                <div className="preview" key={task.id}>
                    <Link to={`/projects/${task.project_id}/tasks/${task.id}`}>
                        <h2>{task.description}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectTaskList;
