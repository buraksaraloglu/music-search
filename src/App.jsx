import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import setClientToken from './hooks/setClientToken';

import Home from './pages/home';
import Search from './pages/search';
import Album from './pages/album';
import Artist from './pages/artist';

const App = () => {
  useEffect(() => setClientToken(), []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/album" component={Album} />
        <Route exact path="/artist/:id" component={Artist} />
      </Switch>
    </Router>
  );
};

export default App;
