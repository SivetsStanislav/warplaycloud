import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';

import './reset.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/registration' element={<RegistrationPage />}/>
      </Routes>
    </>
  );
}

export default React.memo(App);
