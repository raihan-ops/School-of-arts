import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';

import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Details from './Component/Details/Details';
import Notfound from './Component/Erorr/Notfound';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';




function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
          <Home></Home>
          </Route>

          <Route exact path="/details/:itemId">
         <Details></Details>
          </Route>

          <Route exact path="/details">
         <Details></Details>
          </Route>

          <Route exact path="/home">
          <Home></Home>
          </Route>

          <Route exact path="/services">
          <Services></Services>
          </Route>

          <Route exact path="/contact">
          <Contact></Contact>
          </Route>

          <Route exact path="/about">
          <About></About>
          </Route>

          <Route path="*">
          <Notfound></Notfound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
