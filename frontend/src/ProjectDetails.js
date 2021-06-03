import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'

const ProjectDetails = () => {
    const {id} = useParams();
    const history = useHistory();

    const {data: project, error} = useFetch('http://localhost:8000/projects/' + id);

    const handleDelete = () => {
        fetch("http://localhost:8000/projects/" + project.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="project-details">
            {error && <div>{error}</div>}
            {project && <h2>{project.name}</h2>}
            {project && <h3>Status: {project.status}</h3>}
            {project && <p>{project.desc}</p>}

            <button onClick={handleDelete}>Delete project</button>
        </div>
        
     );
}
 
export default ProjectDetails;