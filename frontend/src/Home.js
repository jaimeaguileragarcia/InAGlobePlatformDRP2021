import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import ProjectList from './ProjectList'
import UserList from './UserList'
import useFetch from './useFetch'
import { slide as Menu } from 'react-burger-menu'

const Home = () => {

    const {data: projects, error1} = useFetch("/projects")
    const {data: users, error2} = useFetch("/users")

    return (
        <div className="home">
            <h1>Dashboard</h1>
            <ProjectList projects={projects} title="All Projects"/>
            <ProjectList projects={projects.filter(project => project.status === "Completed")} title="Completed Projects"/>
            <h2>Users</h2>
            <UserList users={users} title="All Users"/>
         

        </div>
        
    );
}
 
export default Home;


//    <Menu>
//             <a id="users" className="menu-item" href="/users">Users</a>
//             <a id="add-user" className="menu-item" href="/add-user">AddUser</a>
//             </Menu>