import React from 'react';
import { HashRouter, Switch, Route, Router } from 'react-router-dom';
import Login from './Login/Login';
import QRScan from './QRScan/QRScan';
import Selection from './Selection/Selection';
import Search from './Search/Search';

class Routes extends React.Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Switch>
          <Route path={'/search'} component={Search} />
          <Route path={'/test'} component={Selection} />
          <Route path={'/'} component={Login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
