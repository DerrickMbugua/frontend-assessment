import './App.css';
import User from './components/User/User'
import Form from './components/User/create'

function App() {
  return (
    <div className="App">
      <h1>Users</h1>
      <User />
      <Form />
    </div>
  );
}

export default App;
