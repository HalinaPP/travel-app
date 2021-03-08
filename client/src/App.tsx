import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Country from './components/Country';
import CountriesList from './components/CountriesList';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  let [ inputText, setInputText ] = useState<string>('');
  return (
    <Router>
      <Header inputText={inputText}
              onInputChange={setInputText} />
      <Switch>
        <Route path="/country">
          <Country/>
        </Route>
        <Route exact path="/">
          <CountriesList inputText={inputText} />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
};

export default App;
