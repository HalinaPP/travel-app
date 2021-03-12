import { Provider } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './store';
import Country from './components/Country';
import { CountriesListContainer } from './containers/CountriesList.container';
import Footer from './components/Footer';
import './App.scss';
import Header from './components/Header';
import { Context } from './utils/Context';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const initialLang = localStorage.getItem('currLangTravelApp') || 'ru';
  const [inputText, setInputText] = useState<string>('');
  const [currLang, setCurrLang] = useState<string>(initialLang);

  useEffect(() => {
    localStorage.setItem('currLangTravelApp', currLang);
  }, [currLang]);

  return (
    <Provider store={store}>
      <Context.Provider value={{ lang: currLang, setLang: (lang: string) => setCurrLang(lang) }}>
        <Router basename={currLang}>
          <ScrollToTop />
          <Header inputText={inputText} onInputChange={setInputText} />
          <Switch>
            <Route path="/country">
              <Country />
            </Route>
            <Route exact path="/">
              <CountriesListContainer inputText={inputText} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Context.Provider>
    </Provider>
  );
};
export default App;
