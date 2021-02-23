import React from 'react'
import './App.css';
import Googlebutton from './components/Googlebutton'
import Template from './components/Template'
import Logo from './components/Logo'
import Welcome from './components/Welcome'
import Lobby from './Lobby'
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";


function App() {
  return (

    <Template >
      <Logo />
        
      <Welcome />
        
        
          
          
        

    
        <div className="buttonbody">
       

          <Googlebutton />
        </div>
        


        </Template>
      

      
    
    

   
  );
}

export default App;
