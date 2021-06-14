import React, { useState } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import CreateProject from './CreateProject'
import ProjectDetails from './ProjectDetails'
import PageNotFound from './PageNotFound'
import MyProfile from './MyProfile'
import User from './User'
import Users from './Users'
import AddUser from './AddUser'
import EditProject from './EditProject'
import Sidebar from './Sidebar'  
import EditUser from './EditUser'
import ProjectTasks from './ProjectTasks'
import AddProjectTask from './AddProjectTask'
import Login from './Login'
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  const title = "Dashboard"

  if(token != "True") {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div className="App">    
      <Sidebar />
        <Navbar />
        <div className="content">   
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create-project">
              <CreateProject />
            </Route>
            <Route exact path="/add-user">
              <AddUser />  
            </Route>
            <Route exact path="/my-profile">
              <MyProfile />
            </Route>
            <Route exact path="/users">
              <Users />  
            </Route>
            <Route exact path="/users/:username">
              <User />
            </Route>
            <Route exact path="/edit-user/:username">
              <EditUser />
            </Route>            
            <Route exact path="/projects/:id/add-task">
              <AddProjectTask />  
            </Route>       
            <Route exact path="/projects/:id/tasks">
              <ProjectTasks />          
            </Route>
            <Route exact path="/projects/:id">
              <ProjectDetails />
            </Route>
            <Route exact path="/edit-project/:id">
              <EditProject />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
