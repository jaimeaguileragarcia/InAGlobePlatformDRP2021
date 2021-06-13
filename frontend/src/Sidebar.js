import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'

const slackLink = "https://slack.com/intl/en-gb/"

export default props => {
  return (
    <Menu>
      { window.location.pathname != "/" && 
      <div>
      <div className="menu-item" > 
      <Link to={`/`}>Home</Link>
      </div>
      <div className="menu-item" > 
      <Link to={`/users/john34`}>Profile</Link>
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
      </div> }
    </Menu>
  );
};