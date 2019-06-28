// Imports
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// Components
import Breadcrumb from 'react-minimal-breadcrumb';

// Styles
const Content = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  top: 50px;
  width: 100% + 20px;
  background: rgba(241, 242, 246, .2);
  z-index: 99;
  transition: all .2s ease 0s;
  overflow: auto;
  padding: 5px 10px 10px 10px;

  @media only screen and (min-width: 576px) {
    width: ${props => (props.view === 'min' ? `calc(${100}% - ${90}px)` : `calc(${100}% - ${240}px)`)};
    left: ${props => (props.view === 'min' ? `${50}px` : `${200}px`)};
    padding: 10px 20px 20px 20px;
  }
`;

// Main
const Main = ({ routes }) => {
  const { dashboard } = useSelector(state => state);

  return (
    <Content view={dashboard.content}>
      <Switch>
        <Breadcrumb routes={routes} />
      </Switch>
      <Switch>
        {routes.map(route => (
          route.route === '/'
            ? <Route key={route.route} exact path={route.route} component={route.page} />
            : <Route key={route.route} path={route.route} component={route.page} />
        ))}
      </Switch>
    </Content>
  );
};

// PropTypes
Main.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;