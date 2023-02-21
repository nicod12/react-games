import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import GuessPage from '../pages/GuessPage';
import HomePage from '../pages/HomePage';
import MemoTestPage from '../pages/MemoTestPage';

import WpmPage from '../pages/WpmPage';


const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/memotest' element={<MemoTestPage />} />
        <Route path='/wpm' element={<WpmPage />} />
        <Route path='/gcharacter' element={<GuessPage />} />
        <Route path='*' element={ <Navigate to={'/'} /> } />
      </Routes>

    </>
  )
}

export default App;