
//import React from 'react';
//import { Routes,Route} from "react-router-dom";

//import Navbar from './Navbar';
// import Error from './Error';
// import Home from './Home';
// import Contact from './Contact';
//import Navbar from '../Navbar';
// import Banner from './Banner';
// import Experts from './Experts';
// import Newsletter from './Newsletter';
// import Cards from './Cards';
// import Footer from './Footar';


import React from 'react'
import {BrowserRouter,  Route,Routes } from 'react-router-dom';
import Home from './Home'
import SearchResult from './SearchResult'
import { AppContext } from './ContextApi';


  export const App = () => {
return(
  <AppContext>
  <BrowserRouter>
  <Routes>
      <Route exact path='/'  Component={Home}/>
      <Route path='/:query/:startIndex'  Component={SearchResult}/>
  </Routes>
  </BrowserRouter>
  </AppContext>
)
    
};



export default App










//////////////////////////////////////////
{/* <>
<Navbar/>
<Banner/>
<Experts/>
<Newsletter/>
<Cards/>
<Footer/>
</> */}






// const Name= ()=>{
//   return <h1 className='text-5xl text-red-300'>Hello ,I am a Name Page!!</h1>
// };
// return (

//   <Routes>
//     <Route index element ={<Contact/>}></Route>
//     <Route path='/home' element ={<Home/>}></Route>
//     <Route path='/home/name' element ={<Name/>}></Route>
//     <Route path="/home/:pqr" element={<Error/>}></Route>
//   </Routes>

   
// )