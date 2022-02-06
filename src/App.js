import { LoginPage } from 'page';
import { CartPage } from 'page';
import { ProductPage } from 'page';
import { PanelPage } from 'page';
import { CategoriesPage } from 'page';
import { HomePage } from 'page';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return ( 
        <Routes>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/CartPage' element={<CartPage/>} />
            <Route path='/CategoriesPage' element={<CategoriesPage/>} />
            <Route path='/ProductPage' element={<ProductPage/>} />
            <Route path='/controlpanel' element={<PanelPage/>} />
            <Route path='/' element={<HomePage/>} />
        </Routes>

     
    );
}

export default App;
