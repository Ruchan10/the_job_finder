import React from 'react';
import LoginPage from './components/login_page';
import SignupPage from './components/signup_page';
import HomePage from './components/home_page';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<Routes>
<Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<HomePage />} />
    </Routes>
    </div>
     
  );
}

export default App;
