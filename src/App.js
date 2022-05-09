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

            <Route path='en/kiushop/verify' element={
              <h1 style={{marginTop: "500px"}}>Verified</h1>
            }
            />

          </Routes>  
      </div>

    </Router>
  );
}

export default App;
