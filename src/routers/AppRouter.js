import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import BlogPage from '../components/BlogPage';
import ProjectPage from '../components/ProjectPage';
import RemoteControlledCar from '../projects/RemoteControlledCar';
import WebRoute from '../routers/WebRoute';
import BlogItem from '../components/BlogItem';
import CI from '../articles/ContinousIntegration';
import OtherArticle from '../articles/OtherArticle';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <WebRoute path="/" component={DashboardPage} exact={true} />
        <WebRoute path="/blog" component={BlogPage} exact={true} />
        <WebRoute path="/blog/CI" component={() => <BlogItem {...CI} />} exact={true} />
        <WebRoute path="/blog/otherArticle" component={() => <BlogItem {...OtherArticle} />} exact={true} />
        <WebRoute path="/projects" component={ProjectPage} exact={true} />
        <WebRoute path="/projects/remoteControlledCar" component={() => <BlogItem {...RemoteControlledCar} />} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
