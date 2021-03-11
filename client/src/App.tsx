import { Provider } from 'react-redux';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Country from './components/Country';
import CountriesList from './components/CountriesList';
import Footer from './components/Footer';
import './App.scss';
import Header from './components/Header';

const App = () => {
  const [inputText, setInputText] = useState<string>('');
  const isMain = true;
  return (
    <Provider store={store}>
      <Router basename={store.getState().lang} >

        <Switch>
          <Route path="/country">
            <Header inputText={inputText} onInputChange={setInputText} isMain={false} />
            <Country />
          </Route>
          <Route exact path="/">
            <Header inputText={inputText} onInputChange={setInputText} isMain={true} />
            <CountriesList inputText={inputText} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
