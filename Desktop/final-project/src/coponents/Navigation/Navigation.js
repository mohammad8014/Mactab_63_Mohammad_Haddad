import React from 'react';
import { Link } from 'react-router-dom';

 function Navigation() {
  return <>
    <Link to='/Login'>مدیریت</Link>
    <br/>

    <Link to='/CartPage'>سبد خرید</Link>
    <br/>

    <Link to='/'>صفحه اصلی </Link>

  </>;
}






export {Navigation};
