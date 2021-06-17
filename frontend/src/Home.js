import ProjectList from './ProjectList';
import MyProjectTasks from './MyProjectTasks';
import PersonalToDo from './PersonalToDo';
import useFetch from './useFetch';
import useToken from './useToken';
import { useState } from "react";

const Home = () => {

    const { data: todos, errorTodos, isPendingTodos } = useFetch("/todos");
    const { setToken, token } = useToken();

    const { data: projects, errorRProjects, isPendingRProjects } = useFetch("/user_project/username/" + token);
    const {data: project_tasks, errorProjectTasks, isPendingProjectTasks} = useFetch("/assigned_task/username/" + token)

    const { data: {firstname, surname}} = useFetch("/users/name/" + token);
    const myTodos = todos.filter(todo => todo.username === token);

  
    return (
        <div className="home">
            <h1>Welcome to your Dashboard, {firstname}</h1>
            {console.log("Firstname: " )}
            <div className="home-projects" style={{ float: "left", width: "600px" }}>
                {isPendingRProjects && <h2>Loading...</h2>}
                {projects && <ProjectList projects={projects} title="My Projects" />}
                {projects && (Object.keys(projects).length === 0) && <h2>You are not currently part of any projects</h2>}
            </div>
            <div className="homeTodos" style={{ float: "right", width: "300px" }}>
                {isPendingTodos && <h2>Loading...</h2>}
                {todos && <PersonalToDo todos={myTodos} title="Personal ToDo items" />}
                {todos && (Object.keys(myTodos).length === 0) && <h2>Well done you have no ToDo items</h2>}
            </div>
            <div className="home-project-tasks" style={{ float: "left", width: "600px" }}>
                {isPendingRProjects && <h2>Loading...</h2>}
                {projects && <MyProjectTasks tasks={project_tasks} title="My tasks from all projects" />}
                {projects && (Object.keys(project_tasks).length === 0) && <h2>Well done you have no project tasks</h2>}
            </div>
        </div>

    );
}

export default Home;