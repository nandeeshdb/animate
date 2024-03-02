import React from 'react'
// import './App.css';
import { Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page1 from './components/Page1';
import Log from './components/Log';
import Tools from './components/Tools';
import Reviews from './components/Reviews';


function App() {
  return (
    <>
    <Navbar/>
   
     <Routes>
      <Route path = "/" element={<Page1 />}/>
      <Route path = "/" element={<Page2 />}/>
      <Route path = "/" element={<Page3 />}/> 
      <Route path = "/log" element={<Log/>}/>

  </Routes>

  {/* <Tools/> */}

      </>
  );
}

export default App;
