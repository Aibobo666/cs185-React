import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Text from './Pages/Text';
import Table from './Pages/Table';
import Email from './Pages/Email';
import Image from './Pages/Image';
import Video from './Pages/Video';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/Text' component={Text}/>
        <Route path='/Table' component={Table}/>
        <Route path='/Email' component={Email}/>
        <Route path='/Image' component={Image}/>
        <Route path='/Video' component={Video}/>
      </Switch>
    </Router>
  );
}

export default App;
