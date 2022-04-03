import { LoginPage } from 'page';
import { CartPage } from 'page';
import { ProductPage } from 'page';
import { PanelPage } from 'page';
import { CategoriesPage } from 'page';
import { HomePage } from 'page';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "assets/styles/style.css"
import { useState, useRef, useEffect } from "react";
import {PATH} from "./Config.js"
const AppRoute = () => {
    const [token , setToken] = useState(localStorage.getItem("token"))
    useEffect(()=>{
        console.log(localStorage)
    },[token])

    return ( 
        <Routes>
            <Route path={PATH.CART} element={<CartPage/>} />
            <Route path={PATH.CATE} element={<CategoriesPage/>}>
                <Route path={PATH.CATE_SLUG} element={<CategoriesPage/>} />
            </Route>
            <Route path={PATH.PRODUCT} element={<ProductPage/>}>
                <Route path={PATH.PRODUCT_SLUG} element={<ProductPage/>} />
            </Route>
            <Route path={PATH.HOME} element={<HomePage/>} />
            <Route path={PATH.LOGIN}  element={<LoginPage  />} />
            <Route path={PATH.PANEL} element={<PanelPage />} />
          

        </Routes>

     
    );
}

export {AppRoute};