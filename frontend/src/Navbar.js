import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar" >
            <a href="/" style={{ 
                color: '#ff4e83',
                fontSize: '20px',
                borderRadius: '8px' 
            }}>InAGlobe Platform</a>
            <div className="links"> 
                <Link to={`/create-project`}>New Project</Link>
                <Link to={`/`}>My Profile</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;