import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
    {/* Large Screen */}
      <nav className="bg-white p-4 w-52 lg:flex hidden md:hidden" style={{ height: "93vh" }}>
        <div className="container mx-auto  items-center justify-around flex-col">
          <div className='h-1/2 flex text-center'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-green-700 text-white flex items-center justify-center rounded-md text-3xl" : "text-blue-700 flex items-center justify-center rounded-md text-3xl" 
              }
              style={{width:"100%"}}
            >
              <h1>Contact</h1>
            </NavLink>
          </div>
          <div className='h-1/2 flex text-center'>
            <NavLink
              to="/chartmaps"
              className={({ isActive }) =>
                isActive ? "bg-green-700 text-white flex items-center justify-center rounded-md text-3xl" : "text-blue-700 flex items-center justify-center rounded-md text-3xl" 
              }
            >
              Charts and Maps
            </NavLink>
          </div>
        </div>
      </nav>
      {/* Medium Screen */}
      <nav className="bg-white p-4 w-52 lg:hidden hidden md:flex " style={{ height: "93vh" }}>
        <div className="container mx-auto  items-center flex-col justify-around">
        <div className='h-1/2 flex text-center'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-green-700 text-white flex items-center justify-center rounded-md text-2xl font-semibold" : "text-blue-700 flex items-center justify-center rounded-md text-2xl font-semibold" 
              }
              style={{width:"100%"}}
            >
              <h1>Contact</h1>
            </NavLink>
          </div>
          <div className='h-1/2 flex text-center'>
            <NavLink
              to="/chartmaps"
              className={({ isActive }) =>
                isActive ? "bg-green-700 text-white flex items-center justify-center rounded-md text-2xl" : "text-blue-700 flex items-center justify-center rounded-md text-2xl" 
              }
            >
              Charts and Maps
            </NavLink>
          </div>
        </div>
      </nav>
      {/* Small Screen */}
      <nav className="bg-white  lg:hidden flex md:hidden" style={{ height: "93vh" ,width:"15%" }}>
        <div className="container mx-auto  items-center flex-col">
        <div className='h-1/2 flex text-center'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-green-700 text-white flex items-center justify-center  text-sm font-semibold" : "text-blue-700 flex items-center justify-center text-sm font-semibold" 
              }
              style={{width:"100%"}}
            >
              <h1>Contact</h1>
            </NavLink>
          </div>
          <div className='h-1/2 flex text-center'>
            <NavLink
              to="/chartmaps"
              className={({ isActive }) =>
                isActive ? "bg-green-700 text-white flex items-center justify-center text-sm" : "text-blue-700 flex items-center justify-center text-sm" 
              }
            >
              Charts and Maps
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
