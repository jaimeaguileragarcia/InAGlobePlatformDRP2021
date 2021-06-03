import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import ProjectList from './ProjectList'
import useFetch from './useFetch'

const Home = () => {

    const {data: projects, error} = useFetch("/projects")

    return (
        <div className="home">
            <h1>Dashboard</h1>
            <ProjectList projects={projects} title="All Projects"/>
            <ProjectList projects={projects.filter(project => project.status === "Completed")} title="Completed Projects"/>
        </div>
    );
}
 
export default Home;