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
            {project && <button style={{fontSize: '20px',
                                        color: '#fff',
                                        marginBottom: '30px',
                                        marginright: '10px',
                                        borderRadius: '8px',
                                        backgroundColor: '#f1b535'}}>Status: {project.status}</button>}
            {project && <button style={{fontSize: '20px',
                                        color: '#fff',
                                        marginBottom: '30px',
                                        marginRight: '10px',
                                        borderRadius: '8px',
                                        backgroundColor: '#595bc0'}}>{project.tag}</button>}
            {project && <h4>Location: {project.location}</h4>}
            {project && <button onClick={(e) => {
                    e.preventDefault();
                    window.open(project.files, "_blank");}}>Documents</button>}
            {project && <p>{project.description}</p>}

            {project && <button onClick={handleRemove}>Delete project</button>}
            
            {project && <Link to={`/edit-project/${project.id}`} className="edit-project-button">Edit project</Link>}
        </div>
        
     );
}
 
export default ProjectDetails;