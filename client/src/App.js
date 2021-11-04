import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <HomePage exact path='/' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
