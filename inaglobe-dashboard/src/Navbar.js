const Navbar = () => {
    return (
        <nav className="navbar" >
            <a href="/" style={{ 
                color: '#ff4e83',
                fontSize: '20px',
                borderRadius: '8px' 
            }}>InAGlobe Platform</a>
            <div className="links"> 
                <a href="/">Notifications</a>
                <a href="/">My Profile</a>
            </div>
        </nav>
    );
}
 
export default Navbar;