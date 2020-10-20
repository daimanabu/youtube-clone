import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Serach from './pages/Serach';
import Top from './pages/Top'
import Watch from './pages/Watch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Top}/>
        <Route exact path='/serch' component={Serach}/>
        <Route exact path='/watch' component={Watch}/>

      </Switch>
    </Router>
  );
}

export default App;
