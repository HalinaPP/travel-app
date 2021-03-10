import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect,useLocation } from "react-router-dom";
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
