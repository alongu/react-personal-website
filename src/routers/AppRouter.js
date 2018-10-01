import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import RemoteControlledCar from '../projects/RemoteControlledCar';
import WebRoute from '../routers/WebRoute';
import BlogItem from '../components/BlogItem';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <WebRoute path="/" component={DashboardPage} exact={true} />
        <WebRoute path="/projects/remoteControlledCar" component={() => <BlogItem {...RemoteControlledCar} />} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
