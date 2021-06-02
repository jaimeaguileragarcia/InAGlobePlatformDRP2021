import {useState} from 'react'

const Home = () => {
    const [count, setCount] = useState(0)
    const [projects, setProjects] = useState([
        { name: "Braille Machine", status: "Completed", id: 1},
        { name: "Eco Warrior", status: "In Progress", id: 2}
    ])

    const handleAddNewProject = () => {
        setCount(count + 1)
        // open a new page where one can add a new project
    }

    return (
        <div className="home">
            <h1>Dashboard</h1>
            {projects.map((project) => (
                <div className="project-preview" key={projects.id}>
                    <h2>{project.name}</h2>
                    <h3>{project.status}</h3>
                </div>
            ))}

            <h2>There are {count} projects</h2>
            <button onClick={handleAddNewProject}>   
                <a href="/create-project">Add a new project</a>
            </button>
        </div>
    );
}
 
export default Home;