import { Navigation } from 'coponents/Navigation/Navigation';
import { Item } from 'page';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return <>
    <Navigation></Navigation> 
    <br/>
    <Link to='/CategoriesPage' >محصولات اپل</Link>
    <br/>

    <Item></Item>
    <h1>Home</h1>
  </>;
}














export { HomePage };
