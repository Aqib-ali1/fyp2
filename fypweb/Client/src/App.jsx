import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import About from './components/pages/About';
import Parcing from './components/pages/Parcing';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/Dashboard Pages/Profile';
import Reports from './components/Dashboard Pages/Reports';

function App() {

  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/parcing' component={Parcing} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Login' component={Login} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/Profile' component={Profile} />

        </Switch>
      </Router>
    
  );
}

export default App;
