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

const App = () => {
  const initialLang = localStorage.getItem('currLangTravelApp') || 'ru';
  const [inputText, setInputText] = useState<string>('');
  const [currLang, setCurrLang] = useState<string>(initialLang);

  useEffect(() => {
    console.log('change lang', currLang);
    localStorage.setItem('currLangTravelApp', currLang);
  }, [currLang]);

  const isMain = true;
  return (
    <Provider store={store}>
      <Context.Provider value={{ lang: currLang, setLang: (lang:string) => setCurrLang(lang) }}>
        <Router basename={currLang}>
          <Switch>
            <Route path="/country">
              <Header inputText={inputText} onInputChange={setInputText} isMain={false} />
              <Country />
            </Route>
            <Route exact path="/">
              <Header inputText={inputText} onInputChange={setInputText} isMain={true} />
                <CountriesListContainer inputText={inputText} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Context.Provider>
    </Provider>
  );
};
/* <CountriesListContainer inputText={inputText} />
*/
export default App;
