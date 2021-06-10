import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch'

const ProjectTask = () => {

    const {task_id} = useParams();
    const {project_id} = useParams();
    const history = useHistory();
    
    const {data: task, error} = useFetch("/projects/" + project_id + "/tasks/" + task_id);
    
    const handleRemove = e => {
        e.preventDefault()
        fetch(("/projects/" + project_id + "/tasks/" + task_id, {method: 'DELETE'}))
            .then(()=> {history.push('/');})
      };

    return (
        <div className="project-task">
            <div>
                {task && <h2>{task.description}</h2>}
            </div>

            <div>
                {task && <h3><strong>Due date: </strong>{task.due_date}</h3>}
                {task && <h3><strong>Priority: </strong>{task.priority}</h3>}           
                {task && <h3><strong>Completed: </strong>{task.completed}</h3>}
            </div>

          
            {task && <button onClick={handleRemove}>Delete task</button>}
            
    </div>
    );
}
 
