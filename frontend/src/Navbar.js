import { Link } from 'react-router-dom'
import useToken from './useToken';

const Navbar = () => {
    const {setToken, token} = useToken();

    return (
        <nav className="navbar" >
            <a href="/" style={{ 
                color: '#ff4e83',
                fontSize: '20px',
                borderRadius: '8px' 
            }}>InAGlobe Platform</a>
            <div className="links"> 
                <Link to={`/create-project`}>New Project</Link>
                <Link to={`/users/` + token}>My Profile</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;