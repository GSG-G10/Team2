import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/footer';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
