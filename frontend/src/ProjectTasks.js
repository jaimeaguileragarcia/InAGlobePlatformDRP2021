import { useParams } from 'react-router';

import ProjectTaskList from './ProjectTaskList'
import useFetch from './useFetch'
import { Link } from "react-router-dom"

const ProjectTasks = () => {    
    const { id } = useParams();
    const {data: project, error} = useFetch("/projects/" + id)

    const {data: project_tasks, error2} = useFetch(`/projects/${project.id}/tasks`);

    return (
        <div className="project-tasks">
            {project_tasks && <h1>Tasks for this project</h1> }
            {project_tasks && <ProjectTaskList project_tasks = {project_tasks} title="Project Tasks"/> }

            {project_tasks && <Link to={`/projects/${project.id}/add-task`} className="add-task-button">Add Task</Link> }
        </div>
    );
}
 
export default ProjectTasks;