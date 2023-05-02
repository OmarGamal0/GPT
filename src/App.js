import React from 'react'

import Imports from './Imports';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';

import './App.css';

import { Route, Routes } from 'react-router';


const App = () => {
  return (
    <>

    <Routes>

    <Route path='GPT' element={<Imports/>} />
    <Route path='GPT/signup' element={<Signup/>} />
    <Route path='GPT/signin' element={<Signin/>} />


    </Routes>

    </>
  )
   
}

export default App