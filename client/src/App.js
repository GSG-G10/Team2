import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from './Components/signup';
import Login from './Components/login';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/footer';
// import Loadmore from './Components/Loadmore.js';

import ImagesSection from './Components/imagesSections';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/home">
            <NavBar />
            <ImagesSection />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
