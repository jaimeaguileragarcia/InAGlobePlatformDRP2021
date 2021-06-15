import ProjectList from './ProjectList'
import PersonalToDo from './PersonalToDo'
import useFetch from './useFetch'
import useToken from './useToken';

const ProjectRegistry = () => {

    const {data: projects, errorProjects, isPendingProjects} = useFetch("/projects")

    return (
        <div className="project-registry">
            <h1>All Projects</h1>
            <br />
            { isPendingProjects && <h2>Loading...</h2> }
            { projects && <ProjectList projects={projects} title="All Projects"/> }
        </div>
        
    );
}
 
export default ProjectRegistry;