import { useParams } from 'react-router';

import ProjectTaskList from './ProjectTaskList'
import useFetch from './useFetch'
import { Link } from "react-router-dom"

const ProjectTasks = () => {
    const { id } = useParams();
    const { data: project, errorProject, isPendingProject } = useFetch("/projects/" + id)

    const { data: project_tasks, errorTasks, isPendingTasks } = useFetch("/projects/" + id + "/tasks");

    return (
        <div className="project-tasks">
            { project && <h1>{project.name}: tasks</h1>}
            <h2>Ongoing Project Tasks</h2>
            { isPendingTasks && <h2>Loading...</h2> }
            { project_tasks && <ProjectTaskList project_tasks={project_tasks.filter(task => !task.completed)}/> }
            <h2>Completed Project Tasks</h2>
            { project_tasks && <ProjectTaskList project_tasks={project_tasks.filter(task => task.completed)}/> }

            <div className="add-task-button-wrapper">
                { project_tasks && <Link to={`/projects/${project.id}/add-task`} className="add-task-button">Add Task</Link> }
            </div>
        </div>
    );
}

export default ProjectTasks;