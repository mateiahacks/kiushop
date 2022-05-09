import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import HomeEn from './components/HomeEn.js';
import LoginEn from './components/LoginEn.js';
import RegisterEn from './components/RegisterEn.js';
import Verify from './components/Verify.js';

const App = () => {
  const [logged_in, set_logged_in] = useState(false);

  const toggleLogged = () => {
    set_logged_in(!logged_in);
  }

  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path='/' element={
              <Navigate to='/en' />
            } />
            <Route path='/en' element={
              <HomeEn logged_in={logged_in} toggleLogged={toggleLogged}/>
            } />
            <Route path='/en/login' element={ 
              <LoginEn logged_in={logged_in} toggleLogged={toggleLogged}/> 
            } />
            <Route path='/en/register' element={ 
              <RegisterEn /> 
            } />      
            <Route path="/ka" element={
              <HomeEn />
            } />

            <Route path={'en/kiushop/verify/:email/:token'} element={<Verify />}/>
          </Routes>  
      </div>

    </Router>
  );
}

export default App;
