import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Country from "./components/Country";
import CountriesList from "./components/CountriesList";
import Footer from "./components/Footer";
import "./App.scss";
import Header from "./components/Header";

const App = () => {
  let [inputText, setInputText] = useState<string>("");
  let isMain: boolean = true;
  return (
    <Router>
      {/* <div className="wrapper">
        <nav className="header__nav nav">
          <ul className="header__nav__list nav__list">
            <div className="logo">app logo</div>
            <li className="nav__item">
              <a href="#" className="link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="link">
                Map
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className="users-block">
          <div className="search-block">
            <input type="text" className="search" placeholder="Search" />
            <a href="#" className="search__icon"></a>
          </div>
          <div className="avatar">
            <a href="#"></a>
          </div>
          <div className="settings">
            <a href="#"></a>
          </div>
        </div>
      </div> */}
      <Header inputText={'any'} isMain={true} onInputChange={() => {console.log('do smt')}}></Header>
      <Switch>
        <Route path="/country">
          <Country />
        </Route>
        <Route exact path="/">
          <CountriesList inputText={"any"} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
