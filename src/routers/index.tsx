import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/Notfound';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;
