import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/footer';
import ImagesSection from './Components/imagesSections';
import SingleProduct from './Components/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <ImagesSection />
        <SingleProduct />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
