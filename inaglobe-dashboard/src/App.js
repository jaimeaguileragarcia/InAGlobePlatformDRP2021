import Navbar from './Navbar'
import Home from './Home'
import CreateProject from './CreateProject'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProjectDetails from './ProjectDetails'


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
            <Route exact path="/create-project">
              <CreateProject />
            </Route>
            <Route path="/projects/:id">
              <ProjectDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
