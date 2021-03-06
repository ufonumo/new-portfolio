import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import NavbarTab from "./components/navbar";
import Loader from 'react-loader-spinner';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <BrowserRouter>
      <div >
      
      {
          loading ?
           <Loader className='text-center spinner mt-5' type="Circles" color="#fff" height={80} width={80} />
          :
          <NavbarTab/> 


      }
      </div>
     </BrowserRouter>
  );
}

export default App;
