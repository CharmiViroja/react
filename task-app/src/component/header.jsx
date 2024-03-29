import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useRouteMatch,
 } 
 from "react-router-dom";
  
  import Home from './demo';
  import About from './About';
  import Services from './Services';
  import Loops from './loops';
  import Gallary from './gallary';
  import State from './state';
  import Menubar from './menubar';
  import Comp from './comp';
  import Api from './api';
  import Useref from './function/Useref';
  import Useform from './function/Useform';

  export default function header(){
    const Numbers = {'/home':'Home', '/about':'About', '/services':'Services', '/loops':'Loops','/gallary':'Gallary','/state':'State',
    '/menubar':'Menubar','/comp':'Comp','/api':'Api','/useref':'UseRef','/useform':'Useform'}
    const returndata = Object.entries(Numbers).map((res,i)=>{
        return  <li className="nav-item" key={i}>
                     <Link className="nav-link" to={res[0]}>{res[1]}</Link>
                </li>
    })
    return(
        <>
<Router>
        
 <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
       {returndata}
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/loops' element={<Loops/>}/>
    <Route path='/gallary' element={<Gallary/>}/>
    <Route path='/state' element={<State/>}/>
    <Route path='/menubar' element={<Menubar/>}/>
    <Route path='/comp' element={<Comp/>}/>
    <Route path='/api' element={<Api/>}/>
    <Route path='/useref' element={<Useref/>}/>
    <Route path='/useform' element={<Useform/>}/>

</Routes>
</Router>
        </>
    )
  }          
