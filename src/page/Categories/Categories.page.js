// import { Navigation } from 'coponents/Navigation/Navigation';
// import { Item } from 'page';
// import React from 'react';

// function CategoriesPage() {
//     return <>
//     <Navigation></Navigation>
//     <SideCategries/>
//     </>;
// }



// import { FooterComponent, Header } from 'layout';
// // import React from 'react';
// import { useState, useEffect } from "react";

// import { Link } from 'react-router-dom';

// function HomePage() {
//     const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3002/products')
//       .then((res) => res.json)
//       .then((data) => setUsers(data))
//       .catch((err) => console.log(err))
//   }, [])
//   console.log(users.title)

//   return <>
//     <Header></Header>
//     <p>{users.title}</p>

//     {/* <Link to='/CategoriesPage' >محصولات اپل</Link> */}

//     <section className='bg-red-300 container'>
//       <article className='bg-green-300'>
//         <h3 className='text-end text-2*1 '>لپتاپ</h3>
//         <Item></Item>
//       </article>
//     </section>




//     <FooterComponent></FooterComponent>
//   </>;
// }














// export { HomePage };








import { Item } from 'page/components/Items/Item';
import { SideCategries } from './component/SideCategries';



import { Navigation } from 'coponents/Navigation/Navigation';
import { FooterComponent, Header } from 'layout';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pagination from 'page/ControlPanel/components/Pagination';



class CategoriesPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items: [],
      count: 10,
      currentPage: 1,
      loading: false,
    
    }

    this.changePageHandler = this.changePageHandler.bind()
  }



  componentDidMount() {
    this.setState({
      loading: true,

    })

    fetch("https://6182355884c2020017d89d14.mockapi.io/api/v1/courses")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            isLoaded: false,
            items: result

          });

        }
      )
  }



  changePageHandler = (page) => {
    this.setState({
      currentPage: page
    })

  }



  render() {
    const { items, currentPage, count } = this.state

    const pages = Math.ceil(items.length / count) //=8

    let pageItems = items.slice((currentPage - 1) * (count), count * currentPage)
    if (this.state.loading)
      return <><p className='animate-pulse text-2xl text-center text-green-900 mt-10' >loading...</p></>
    else {
      return (
        <>
        <Navigation></Navigation>
          <div className='flex justify-between items-center bg-slate-100'>


                <div className='flex justify-between items-center'>
                {pageItems.filter((item) => item.category=="Tools").map(item=><Item   data={item} key={item.id}/>)}

                </div>

{/* 
              <article className='flex flex-wrap'>
                {pageItems.filter((item) => item.category == "Music").map(item => <Item data={item} key={item.id} />)}
              </article>
          
              <article className='flex flex-wrap'>
                {pageItems.filter((item) => item.category == "Books").map(item => <Item data={item} key={item.id} />)}
              </article> */}


   <SideCategries/>


          </div>


          <FooterComponent></FooterComponent>
        </>
      )
    }



  }




}











export { CategoriesPage };








