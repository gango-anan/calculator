import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import '../App.css';

const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
    </>
  </BrowserRouter>
);

export default App;
