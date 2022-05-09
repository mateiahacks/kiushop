import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header.js';
import HomeEn from './components/HomeEn.js';
import LoginEn from './components/LoginEn.js';
import RegisterEn from './components/RegisterEn.js';

function App() {

  return (
    <Router>
      <div className="app">
        <Header/>
          <Routes>
            <Route path='/' element={
              <Navigate to='/en' />
              
            } />
            <Route path='/en' element={
              <HomeEn />
            } />
            <Route path='/en/login' element={ 
              <LoginEn /> 
            } />
            <Route path='/en/register' element={ 
              <RegisterEn /> 
            } />      
            <Route path="/ka" element={
              <HomeEn />
            } />

            <Route path='/kiushop/verify' element={
              <h1>Verified</h1>
            }>
            </Route>

          </Routes>  
      </div>

    </Router>
  );
}

export default App;
