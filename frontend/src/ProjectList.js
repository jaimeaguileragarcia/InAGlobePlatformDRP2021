import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {

    return (
        <div className="project-list">
            {projects.map((project) => (
                <div className="preview" key={project.id}>
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