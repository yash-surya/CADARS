// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { Home } from './components/Home';
import About from './components/About';
import LeafletMap from './components/LeafletMap';
import Navigation from './components/Navigation';
import DataFetcher from './components/DataFetcher';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isDataFetcherRoute = location?.pathname === '/DataFetcher';

  return (
    <div className="container">
      <Navigation renderNavigation={!isDataFetcherRoute} />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/LeafletMap" component={LeafletMap} />
        <Route path="/DataFetcher" component={DataFetcher} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
