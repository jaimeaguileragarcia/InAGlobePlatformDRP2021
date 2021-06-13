import { Link } from 'react-router-dom'

const Navbar = () => {

    const path = window.location.pathname;

    return (
        <nav className="navbar" >
            { window.location.pathname != "/" && 
            <div>
            <a href="/" style={{ 
                color: '#ff4e83',
                fontSize: '20px',
                borderRadius: '8px' 
            }}>InAGlobe Platform</a>
            <div className="links"> 
                <Link to={`/create-project`}>New Project</Link>
                <Link to={`/users/john34`}>My Profile</Link>
            </div>
            </div> }
        </nav>
    );
}
 
export default Navbar;