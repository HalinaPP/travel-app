import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Country from "./components/Country";
import CountriesList from "./components/CountriesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  let [inputText, setInputText] = useState<string>("");
  let isMain: boolean = true;

  return (
    <Provider store={store}>
      <Router>
        <Header inputText={inputText} onInputChange={setInputText} isMain={isMain} />
        <Switch>
          <Route path="/country">
            <Country />
          </Route>
          <Route exact path="/">
            <CountriesList inputText={inputText} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
