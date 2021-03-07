import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Country from './components/Country';
import CountriesList from './components/CountriesList';
import Footer from './components/Footer';

const App = () => (
        <Router>
            <Switch>
                <Route path="/country">
                    <Country/>
                </Route>
                <Route exact path="/">
                    <CountriesList/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
);

export default App;
