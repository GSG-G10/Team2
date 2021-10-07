/* eslint-disable import/no-unresolved */
import './App.css';
// eslint-disable-next-line import/no-unresolved
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './Components/NavBar/NavBar';
import ImagesSection from './Components/imagesSections';
import DisplayProduct from './Components/dispalyProducts';
import ProductProvider from './contect/productsContext';

function App() {
  const history = createBrowserHistory();
  return (
    <ProductProvider>

      <Router history={history}>
        <NavBar />
        <ImagesSection />
        <DisplayProduct />
      </Router>
    </ProductProvider>
  );
}

export default App;
