import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Country from './components/Country';
import CountriesList from './components/CountriesList';
import Footer from './components/Footer';
import './App.scss';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  const [inputText, setInputText] = useState<string>('');
  const isMain = true;
  return (
    <Router>
      <ScrollToTop />
      <Header
        inputText={'any'}
        isMain={true}
        onInputChange={() => {
          console.log('do smt');
        }}
      ></Header>
      <Switch>
        <Route path="/country">
          <Country />
        </Route>
        {/* <Route path="/">
          <Country />
        </Route> */}
        <Route exact path="/">
          <CountriesList inputText={'any'} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
