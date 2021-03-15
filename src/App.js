import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import './App.css';



import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.componenet';
import JobDescription from './pages/jobDescription/job-description.componenet';


function App() {
  return (
    <div className="App">
     <Header/>
     <Switch>
     <Route exact path='/' component={Homepage}/>
     <Route path='/position' component={JobDescription}/>
     </Switch>
    
     
    </div>
  );
}

export default App;
