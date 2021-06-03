import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import ProjectList from './ProjectList'
import useFetch from './useFetch'

const Home = () => {
    // const {data: projects, error} = useFetch("http://localhost:8000/projects")

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects", {method: 'GET'}).then(response => 
            response.json().then(data => {
                setProjects(data);
            }))
    }, ["/projects"]);


    return (
        <div className="home">
            <h1>Dashboard</h1>

                { projects && <ProjectList projects={projects} title="All Projects"/> }
                { projects && <ProjectList projects={projects.filter(project => project.status === "Completed")} title="Completed Projects"/> }
        </div>
    );
}
 
export default Home;