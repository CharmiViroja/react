import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Routes
 } from "react-router-dom";
  
  import Home from './demo';
  import About from './About';

  export default function header(){
    const Numbers = {'/home':'Home', '/about':'About'}
    const returndata = Object.entries(Numbers).map((res,i)=>{
        return  <li class="nav-item" key={i}>
                     <Link class="nav-link" to={res[0]}>{res[1]}</Link>
                </li>
    })
    return(
        <>
<Router>
        
 <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
       {returndata}
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
</Routes>
</Router>
        </>
    )
  }          
