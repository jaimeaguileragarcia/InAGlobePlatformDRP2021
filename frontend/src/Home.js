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

    return (
        <div className="home">
            <h1>Dashboard</h1>
            <div className="home-projects" style={{ float: "left", width: "600px" }}>
                {isPendingRProjects && <h2>Loading...</h2>}
                {projects && <ProjectList projects={projects} title="My Projects" />}
            </div>
            <div className="homeTodos">
                {isPendingTodos && <h2>Loading...</h2>}
                {todos && <PersonalToDo todos={todos.filter(todo => todo.username === token)} title="Personal ToDo items" />}
            </div>
            <div className="home-project-tasks" style={{ float: "left", width: "600px" }}>
                {isPendingRProjects && <h2>Loading...</h2>}
                {projects && <MyProjectTasks tasks={project_tasks} title="My tasks from all projects" />}
            </div>
        </div>

    );
}

export default Home;