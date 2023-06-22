
import React from 'react';
import { Link} from "react-router-dom";

//import App_1 from './App_1';
//import Adhikari from './assets/Adhikari'
//import Prakash from './assets/Prakash'
//import Error from './Error';
// import Home from './Home';
// import Contact from './Contact';
//import AppRouter from 'react-router-dom';

const Nav = () => {
  
  return (
    <div>
    <div >Shopio</div>
     <ul >
        <Link to="/">Home</Link>
        <Link to="/contact">contact</Link>
        <Link to="/contact/name">Name</Link>
     </ul>
  </div>   
  );
}



export default Nav
