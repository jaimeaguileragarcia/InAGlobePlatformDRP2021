import { Link } from 'react-router-dom'

const ProjectList = ({ projects, title }) => {

    return (
        <div className="project-list">
            <h2>{title}</h2>
            {projects.map((project) => (
                <div className="project-preview" key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                        <h2>{project.name}</h2>
                        <h3>{project.status}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectList;