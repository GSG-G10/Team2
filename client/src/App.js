import './App.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './Components/NavBar/NavBar';
import ImagesSection from './Components/imagesSections';

function App() {
  const history = createBrowserHistory();
  return (

    <Router history={history}>
      <NavBar />
      <ImagesSection />
    </Router>
  );
}

export default App;
