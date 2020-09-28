import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter,
} from "react-router-dom";
import './App.css';
import Overview from './pages/home'
import NotFound from "./component/notfound";

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

const Layout = withRouter(({ location }) => {
  return (
    <Router>
        <Switch>
              <Route exact path="/golive" component={Overview}/>
              <Route exact path="/">
                <Redirect to="/golive" />
              </Route>

              <Route path="" component={NotFound} />
            </Switch>
    </Router>
  );
});

export default App;