import './App.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <NavBar />
    </Router>
  );
}

export default App;
