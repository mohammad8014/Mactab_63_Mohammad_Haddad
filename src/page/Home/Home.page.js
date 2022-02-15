import { FooterComponent, Header } from 'layout';
// import Item from 'page/components/Items/Item';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return <>
    <Header></Header> 
    {/* <Link to='/CategoriesPage' >محصولات اپل</Link> */}

    {/* <Item></Item> */}


      <FooterComponent></FooterComponent>
  </>;
}














export { HomePage };
