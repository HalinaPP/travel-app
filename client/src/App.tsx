import { Provider } from 'react-redux';
import { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { store } from './store';
import { CountryContainer } from './containers/Country.container';
import { CountriesListContainer } from './containers/CountriesList.container';
import Footer from './components/Footer';
import './App.scss';
import Header from './components/Header';
import { LanguageContext } from './utils/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import SightsMap from './components/SightsMap';

const App = () => {
  const initialLang = localStorage.getItem('currLangTravelApp') || 'ru';
  const [inputText, setInputText] = useState<string>('');
  const [currLang, setCurrLang] = useState<string>(initialLang);

  return (
    <Provider store={store}>
      <LanguageContext.Provider value={{ lang: currLang, setLang: (lang: string) => setCurrLang(lang) }}>
        <Router>
          <ScrollToTop />
          <Header inputText={inputText} onInputChange={setInputText} />
          <Switch>
            <Route exact path="/">
              <Redirect to={`/${currLang}`} />
            </Route>
            <Route path={`/${currLang}/country/:id`}>
              <CountryContainer />
            </Route>
            <Route exact path={`/${currLang}`}>
              <CountriesListContainer inputText={inputText} />
            </Route>
            <Route path='/map'>
              <SightsMap />
            </Route>
          </Switch>
          <SightsMap />
          <Footer />
        </Router>
      </LanguageContext.Provider>
    </Provider>
  );
};
export default App;
