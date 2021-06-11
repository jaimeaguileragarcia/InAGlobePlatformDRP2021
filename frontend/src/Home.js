import ProjectList from './ProjectList'
import PersonalToDo from './PersonalToDo'
import useFetch from './useFetch'

const Home = () => {

    const {data: projects, error1} = useFetch("/projects")
    const {data: todos, error2} = useFetch("/todos")

    return (
        <div className="home">
            <h1>Dashboard</h1>
            <div className="home-projects" style={{float: "left", width: "600px"}}>
                <ProjectList projects={projects} title="All Projects"/>
                <ProjectList projects={projects.filter(project => project.status === "Completed")} title="Completed Projects"/>
            </div>
            <div className="homeTodos">
                <PersonalToDo todos={todos.filter(todo => todo.username === "john34")} title="Personal ToDo items"/>
            </div>
        </div>
        
    );
}
 
export default Home;