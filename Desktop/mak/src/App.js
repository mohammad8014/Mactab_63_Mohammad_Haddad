import { AppRoute } from './Routes/RoutesComponent';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./assets/styles/style.css"
import { useState, useRef, useEffect } from "react";




const App = (props) => {
    const [token,setToken] =useState();
    window.onload = () => {

        localStorage.setItem('token' , "");
      };
    

    return ( 
        <AppRoute />

     
    );
}

export default App;
