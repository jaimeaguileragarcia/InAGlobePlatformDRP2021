import Navbar from './Navbar'
import Home from './Home'
import CreateProject from './CreateProject'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProjectDetails from './ProjectDetails'
import PageNotFound from './PageNotFound'
import MyProfile from './MyProfile'


function App() {
  const title =  "Dashboard"
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create-project">
              <CreateProject />
            </Route>
            <Route path="/my-profile">
              <MyProfile />
            </Route>
            <Route path="/projects/:id">
              <ProjectDetails />
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
