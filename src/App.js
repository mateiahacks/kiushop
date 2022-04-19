import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header.js';
import { useState, useEffect } from 'react';

function App() {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    if (lang === "en") {
      setLang("ka");
    } else {
      setLang("en");
    }
  }

  return (
    <Router>
      <div className="app">
        <Header lang={lang} toggleLang={toggleLang}/>
        
          <Routes>
            <Route path='/' element={
              <Navigate to='/en' />
            } />
            <Route path='/en' element={
              <h1>Home</h1>
            } />      
            <Route path="/ka" element={
              <h1>სახლი</h1>
            } />
          </Routes>
        
      </div>

    </Router>
  );
}

export default App;
