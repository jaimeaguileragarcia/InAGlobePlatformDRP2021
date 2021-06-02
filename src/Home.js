import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import ProjectList from './ProjectList'
import useFetch from './useFetch'

const Home = () => {
    const [count, setCount] = useState(0);
    const {data: projects, error} = useFetch("http://localhost:8000/projects")

    const handleAddNewProject = () => {
        setCount(count + 1)
        // open a new page where one can add a new project
    }
    
    const [currentTime, setCurrentTime] = useState(0);
    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
          setCurrentTime(data.time);
        });
      }, []);    

    return (
        <div className="home">
            <h1>Dashboard</h1>
                { error && <div>{error}</div>}

                { projects && <ProjectList projects={projects} title="All Projects"/> }
                { projects && <ProjectList projects={projects.filter(project => project.status === "Completed")} title="Completed Projects"/> }
        </div>
    );
}
 
export default Home;