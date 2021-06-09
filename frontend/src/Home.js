import ProjectList from './ProjectList'
import PersonalToDo from './PersonalToDo'
import useFetch from './useFetch'

const Home = () => {

    const {data: projects, error1} = useFetch("/projects")
    const {data: todos, error2} = useFetch("/todos")
    // const todos = [
    //     {
    //         id: 1,
    //         todo_desc: "Call Jaime about the DRP project with the Department of Computing",
    //         priority: 4,
    //         due_date: "11th June 2021",
    //         username: "john34"
    //     },
    //     {
    //         id: 2,
    //         todo_desc: "Read over final brief for Nicholas Wu regarding EcoWarriors",
    //         priority: 3,
    //         due_date: "13th June 2021",
    //         username: "john34"
    //     },
    //     {
    //         id: 3,
    //         todo_desc: "Send the notes for the meeting on Monday to rest of the team",
    //         priority: 1,
    //         due_date: "16th June 2021",
    //         username: "ethanw"
    //     }
    // ]

    return (
        <div className="home">
            <h1>Dashboard</h1>
            <ProjectList projects={projects} title="All Projects"/>
            <ProjectList projects={projects.filter(project => project.status === "Completed")} title="Completed Projects"/>
            <PersonalToDo todos={todos.filter(todo => todo.username === "john34")} title="Personal tasks"/>
        </div>
        
    );
}
 
export default Home;