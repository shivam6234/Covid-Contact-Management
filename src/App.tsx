import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ChartHeading from './components/Headers/ChartHeading';
import ContactHeader from './components/Headers/ContactHeader';
import ContactData from './components/NavbarComponents/ContactData';
import ChartsandMap from './components/NavbarComponents/ChartsandMap';





function App() {
  return (
   <div >
   <Routes>
    <Route path='/chartmaps' element={<ChartHeading/>}/>
    <Route path='/' element={<ContactHeader/>}/>
   </Routes>
   <div className='flex '>
   <Navbar/>
   <Routes>
   <Route path='/' element={<ContactData/>}/>
 
   <Route path='/chartmaps' element={<ChartsandMap/>}/>
   </Routes>
   </div>

   
   </div>
  );
}

export default App;
