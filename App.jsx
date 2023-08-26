import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Component/Navbar/Navbar";
import {Routes , Route} from "react-router";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Service from "./Component/Services/Service";
import Skill from "./Component/Skills/Skill";
import Contact from "./Component/Contact/Contact";
import Project from './Component/Project_Details/Project';
import Javascript from './Component/Javascript_projects/Javascript';
import Angular from './Component/Angular_projects/Angular';


const App=()=> {
  return (
   <main>
 <Navbar/>

       <Routes>
           <Route exact path='/' Component={Home}/>
           <Route exact path='/home' Component={Home}/>
           <Route exact path='/about' Component={About}/>
           <Route exact path='/service' Component={Service}/>
           <Route exact path='/skill' Component={Skill}/>
           <Route exact path='/contact' Component={Contact}/>
           <Route exact path='/Project_details' Component={Project}/>
           <Route exact path='/Javascript' Component={Javascript}/>
           <Route exact path='/Angular' Component={Angular}/>
       </Routes>



   </main>
  )
}

export default App