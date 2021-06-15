import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, useHistory } from 'react-router-dom'
import useToken from './useToken';

const Sidebar = () => {

const slackLink = "https://slack.com/intl/en-gb/"

const history = useHistory();

const {setToken, token} = useToken();

const handleSignOut = e => {
  e.preventDefault()

  localStorage.clear();

  window.location.reload();
  history.push("/");
}

return (
    <Menu>
      <div className="menu-item" > 
      <Link to={`/`}>Home</Link>
      </div>
      <div className="menu-item" > 
      <Link to={`/users/` + token}>Profile</Link>
      </div>
      <div className="menu-item" > 
      <Link to={`/users`}>All Users</Link>
      </div>
      <div className="menu-item" > 
      <Link to={`/add-user`}>Add User</Link>
      </div>
      <div className="menu-item" > 
      <a href={slackLink} target="_blank">Go To Slack</a>
      </div> 
      <div className="menu-item" >
      <button style={{textDecoration: "underline", cursor: "pointer"}} onClick={handleSignOut}>Log Out</button>
      </div> 
    </Menu>

);

}

export default Sidebar;