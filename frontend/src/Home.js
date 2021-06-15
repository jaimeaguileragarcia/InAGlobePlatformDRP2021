import ProjectList from './ProjectList'
import PersonalToDo from './PersonalToDo'
import useFetch from './useFetch'
import useToken from './useToken';

const Home = () => {

    const {data: projects, errorProjects, isPendingProjects} = useFetch("/projects")
    const {data: todos, errorTodos, isPendingTodos} = useFetch("/todos")
    const {setToken, token} = useToken();

    return (
        <div className="home">
            <h1>Dashboard</h1>
            <div className="home-projects" style={{float: "left", width: "600px"}}>
                { isPendingProjects && <h2>Loading...</h2> }
                { projects && <h2>All Projects</h2> }
                <br />
                { projects && <ProjectList projects={projects}/> }
                <br />
                { projects && <h2>Completed Projects</h2> }
                <br />
                { projects && <ProjectList projects={projects.filter(project => project.status === "Completed")}/> }
            </div>
            <div className="homeTodos">
                { isPendingTodos && <h2>Loading...</h2> }
                { todos && <PersonalToDo todos={todos.filter(todo => todo.username === token)} title="My Tasks"/> }
            </div>
        </div>
        
    );
}
 
export default Home;