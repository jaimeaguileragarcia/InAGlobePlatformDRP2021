import { useParams } from 'react-router';
import useFetch from './useFetch'

const ProjectDetails = () => {
    const {id} = useParams();
    const {data: project, error} = useFetch('http://localhost:8000/projects/' + id);

    return ( 
        <div className="project-details">
            {project && <h2>{project.name}</h2>}
            {project && <h3>{project.status}</h3>}
        </div>
        
     );
}
 
export default ProjectDetails;