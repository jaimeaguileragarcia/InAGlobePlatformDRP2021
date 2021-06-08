import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'
import { Link } from "react-router-dom"

const ProjectDetails = () => {
    const {id} = useParams();
    const history = useHistory();

    const {data: project, error} = useFetch("/projects/" + id)

    const handleRemove = e => {
        e.preventDefault()
        fetch("/projects/" + id, {method: 'DELETE'})
            .then(()=> {history.push('/');})
      };

    return ( 
        <div className="project-details">
            {project && <h2>{project.name}</h2>}
            {project && <h3>Status: {project.status}</h3>}
            {project && <p>Description: {project.description}</p>}

            <button onClick={handleRemove}>Delete project</button>
            <Link to={`/edit-project/${project.id}`} className="edit-project-button">Edit project</Link>
        </div>
        
     );
}
 
export default ProjectDetails;