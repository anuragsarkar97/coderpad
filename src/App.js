import React from 'react';
import './App.css';
import Page from './components/Page';
import Nav from './components/Nav';
import SignIn from './components/SignIn';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from "react-router";
import 'antd/dist/antd.css';
function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Route exact path={"/login"} component={withRouter(SignIn)} />
        <Route exact path={"/home"} component={withRouter(Page)} />
      </div>
      </Router>
  );
}

export default App;
