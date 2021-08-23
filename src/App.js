import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';
import HomeContainer from './container/HomeContainer';
import LandingSearch from './container/pages/LandingSearch';
import store from './store';
import { Provider } from 'react-redux';
import DetailMovieContainer from './container/pages/DetailMovieContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route exact path="/movie/:id" component={DetailMovieContainer} />
        </BrowserRouter>
        <FooterComponent/>
      </Provider>
    )
  }
}
