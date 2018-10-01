import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WebRoute = ({
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
        <div className="page__content">
            {/* <Header /> */}
            <div className="main">
              <Component {...props} />
            </div>
            <Footer />
      </div>
    )} />
  );

export default WebRoute;