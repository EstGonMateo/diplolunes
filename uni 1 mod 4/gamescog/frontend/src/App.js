import React from "react" 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Normalize.css';
import './App.css';
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from './pages/HomePage';
import AutorPage from './pages/AutorPage';
import InfoPage from './pages/InfoPage';
import VjuegoscognitivosPage from './pages/VjuegoscognitivosPage';
import BibliografíaPage from './pages/BibliografíaPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <Router>
      <Header/>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/autor" exact component={AutorPage} />
        <Route path="/info" exact component={InfoPage} />
        <Route path="/vjuegoscognitivos" exact component={VjuegoscognitivosPage} />
        <Route path="/bibliografía" exact component={BibliografíaPage} />
        <Route path="/Contacto" exact component={ContactoPage} />
        </Switch>
      <Footer/>
      </Router>
  );
}

export default App;


