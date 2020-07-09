import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/Registration">Sign up</NavLink><pre/>
          <NavLink to="/Login">Log in </NavLink><pre/>
       </div>
    );
}

 
export default Navigation;