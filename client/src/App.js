import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Sidebar from './components/Sidebar/Sidebar';
import DisplayQs from './components/QnA/DisplayQs';
import RefractPost from './components/RefractPost';
const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <div className="path">
      <Sidebar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/DisplayQs" exact component={DisplayQs} />
        <Route path="/RefractPost" exact component={RefractPost} />
      </Switch>
      
      </div>
    </Container>
  </BrowserRouter>
);

export default App;
