import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Country from './components/Country';
import CountriesList from './components/CountriesList';
import Footer from './components/Footer';
import './App.scss';

const App: React.FC = () => (
  <Router>
    <header>
      <div className="wrapper">
        <nav className='header__nav nav'>
          <ul className='header__nav__list nav__list'>
            <div className='logo'>app logo</div>
            <li className='nav__item'><a href="#" className="link">About</a></li>
            <li className='nav__item'><a href="#" className="link">Map</a></li>
            <li className='nav__item'><a href="#" className="link">Contacts</a></li>
          </ul>
        </nav>
        <div className="users-block">
          <div className="search-block">
            <input type="text" className="search" placeholder='Search'/>
            <a href="#" className="search__icon"></a>
          </div>
          <div className="avatar"><a href="#"></a></div>
          <div className="settings"><a href="#"></a></div>
        </div>

      </div>
    </header>
    <Switch>
      <Route path='/country'>
        <Country />
      </Route>
      <Route exact path='/'>
        <CountriesList />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default App;
