import Navbar from './Navbar'
import Home from './Home'
import CreateProject from './CreateProject'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProjectDetails from './ProjectDetails'
import PageNotFound from './PageNotFound'
import MyProfile from './MyProfile'
import User from './User'
import Users from './Users'
import AddUser from './AddUser'
import EditProject from './EditProject'
import Sidebar from './Sidebar'

    
 

function App() {
  const title =  "Dashboard"
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
            <Route path="/create-project">
              <CreateProject />
            </Route>
            <Route path="/add-user">
              <AddUser />  
            </Route>
            <Route path="/my-profile">
              <MyProfile />
            </Route>
            <Route path="/users">
              <Users />  
            </Route>
            <Route path="/users/:username">
              <User />
            </Route>
            <Route path="/projects/:id">
              <ProjectDetails />
            </Route>
            <Route path="/edit-project/:id">
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
