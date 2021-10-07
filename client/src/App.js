import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from './Components/signup';
import Login from './Components/login';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/footer';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import ImagesSection from './Components/imagesSections';
import CategoryItems from './Components/categoryItems';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ImagesSection />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/fillter">
            <CategoryItems />
          </Route>
          <Route exact path="/single">
            <SingleProduct />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
