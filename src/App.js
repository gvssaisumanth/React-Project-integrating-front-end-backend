import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Studentform from './studentForm/studentForm';
import ResultBoard from './studentDetails/studentDetails';
import Home from './Home';

function App() {
  return (
    <Router>
    <div >
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/studentForm" exact component={Studentform}></Route>
        <Route path="/resultBoard" exact component={ResultBoard}></Route>
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
