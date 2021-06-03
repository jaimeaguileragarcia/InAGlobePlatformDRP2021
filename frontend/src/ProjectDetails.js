import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'

const ProjectDetails = () => {
    const {id} = useParams();
    const history = useHistory();

    // const {data: project, error} = useFetch('http://localhost:8000/projects/' + id);

    // const handleDelete = () => {
    //     fetch("http://localhost:8000/projects/" + project.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         history.push('/');
    //     })
    // }

    const [project, setProject] = useState({}); 

    useEffect(() => {
        fetch("/projects/" + project.id, {method: 'GET'}).then(response => 
            response.json().then(data => {
                setProject(data);
            }))
    }, [remove]);

    const [remove, setRemove] = useState(null); 
    
    useEffect(() => {
        fetch("/projects/" + project.id, {method: 'DELETE'}).then(response => 
            response.json().then(()=> {history.push('/');})
        )
    }, []);

    return ( 
        <div className="project-details">
            {project && <h2>{project.name}</h2>}
            {project && <h3>Status: {project.status}</h3>}
            {project && <p>{project.desc}</p>}

            <button onClick={setRemove(project.id)}>Delete project</button>
        </div>
        
     );
}
 
export default ProjectDetails;