import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'
import useRemove from './useRemove'

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
        </div>
        
     );
}
 
export default ProjectDetails;