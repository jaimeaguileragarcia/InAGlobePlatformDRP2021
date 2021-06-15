import ProjectList from './ProjectList'
import PersonalToDo from './PersonalToDo'
import useFetch from './useFetch'
import useToken from './useToken';
import { useState } from "react";

const Home = () => {

    const {data: projects, errorProjects, isPendingProjects} = useFetch("/projects");
    const {data: todos, errorTodos, isPendingTodos} = useFetch("/todos");
    const {setToken, token} = useToken();

    const {data: relevantProjects, errorRProjects, isPendingRProjects} = useFetch("/user_project/username/" + token);

    return (
        <div className="home">
            <h1>Dashboard</h1>
            <div className="home-projects" style={{float: "left", width: "600px"}}>
                { isPendingProjects && <h2>Loading...</h2> }
                { projects && <ProjectList projects={relevantProjects} title="My Projects"/> }
            </div>
            <div className="homeTodos">
                { isPendingTodos && <h2>Loading...</h2> }
                { todos && <PersonalToDo todos={todos.filter(todo => todo.username === token)} title="Personal ToDo items"/> }
            </div>
        </div>
        
    );
}
 
export default Home;