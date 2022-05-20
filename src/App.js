import './App.css';
import User from './components/User/User'
import Form from './components/User/create'
import Edit from './components/User/edit'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <User />
          </Route>
          <Route path="/create">
          <Form />
          </Route>
          <Route path="/:id">
          <Edit />
          </Route>

        </Switch>
        
        
      </div>
    </Router>

  );
}

export default App;
