import './App.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/footer';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="container">
      <Router history={history}>
        <NavBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
