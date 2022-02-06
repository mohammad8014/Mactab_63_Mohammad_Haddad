import { Header } from 'layout';
import { Item } from 'page';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return <>
    <Header></Header> 
    <br/>
    <Link to='/CategoriesPage' >محصولات اپل</Link>
    <br/>

    <Item></Item>
    <h1>Home</h1>
    <h1 className="text-3xl text-red-400 font-bold underline">
      Hello world!
    </h1>
  </>;
}














export { HomePage };
