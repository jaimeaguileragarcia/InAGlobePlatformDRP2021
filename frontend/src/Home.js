import ProjectList from './ProjectList'
import PersonalToDo from './PersonalToDo'
import useFetch from './useFetch'

const Home = () => {

    const {data: projects, errorProjects, isPendingProjects} = useFetch("/projects")
    const {data: todos, errorTodos, isPendingTodos} = useFetch("/todos")

    return (
        <div className="home">
            <h1>Dashboard</h1>
            <div className="home-projects" style={{float: "left", width: "600px"}}>
                { isPendingProjects && <h2>Loading...</h2> }
                { projects && <ProjectList projects={projects} title="All Projects"/> }
                { projects && <ProjectList projects={projects.filter(project => project.status === "Completed")} title="Completed Projects"/> }
            </div>
            <div className="homeTodos">
                { isPendingTodos && <h2>Loading...</h2> }
                { todos && <PersonalToDo todos={todos.filter(todo => todo.username === "john34")} title="Personal ToDo items"/> }
            </div>
        </div>
        
    );
}
 
export default Home;