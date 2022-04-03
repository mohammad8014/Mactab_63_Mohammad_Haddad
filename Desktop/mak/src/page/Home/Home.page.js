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



import { Navigation } from 'coponents/Navigation/Navigation';
import { FooterComponent, Header } from 'layout';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pagination from 'page/ControlPanel/components/Pagination';
import axios from 'axios';



class HomePage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items: [],
      count: 10,
      currentPage: 1,
      loading: false,
      watch:false
      ,mobaile:false,
      laptop:false
    }

    this.changePageHandler = this.changePageHandler.bind()
  }



  componentDidMount() {
    this.setState({
      loading: true,
   

    })

    fetch("http://localhost:3002/products")
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


  watchBtn = () =>{
    this.setState({
      watch:true
    })
  }


  render() {
    const laptopArray = this.state.items.filter((item) => item.category=="Laptop");
    const mobileArray = this.state.items.filter((item) => item.category=="mobile");
    const watchArray = this.state.items.filter((item) => item.category=="watch");
    const { items, currentPage, count } = this.state

    const pages = Math.ceil(items.length / count) //=8

    let pageItems = items.slice((currentPage - 1) * (count), count * currentPage)
    if (this.state.loading)
      return <><p className='animate-pulse text-2xl text-center text-green-900 mt-10' >در حال بارگزاری...</p></>
    else {
      return (
        <>
          <Header></Header>
          <div className='flex justify-center items-center mt-12'>

            <section className='flex flex-wrap w-full  justify-center items-center container   ' >

              <Link to={`/CategoriesPage/Laptop`}  className='text-2xl text-right ml-16 border-b-4 pb-2 border-blue-600 mb-5 mt-12 mr-16 w-full rounded-b-2xl pr-4'> لپتاپ </Link>


              <article className='flex  mt-8 px-16 w-full justify-between  flex-wrap'>
                {laptopArray.map(item=> {
                  if(laptopArray.findIndex(x=>x.id === item.id) < 3)
                  return <Item arrayData={this.state.items}   data={item} key={item.id}/>})}
              </article>
              <Link to={`/CategoriesPage/mobile`}  className='text-2xl text-right ml-16 border-b-4 pb-2 border-blue-600 mb-5 mt-12 mr-16 w-full rounded-b-2xl pr-4'> موبایل </Link>

              <article className='flex  mt-8 px-16 w-full justify-between  flex-wrap'>
                  {mobileArray.map(item=> {
                  if(mobileArray.findIndex(x=>x.id === item.id) < 3)
                  return <Item arrayData={this.state.items}   data={item} key={item.id}/>})}
              </article>
              <Link 
              // onClick={watchBtn } 
              to={`/CategoriesPage/watch`}  className='text-2xl text-right ml-16 border-b-4 pb-2 border-blue-600 mb-5 mt-12 mr-16 w-full rounded-b-2xl pr-4'> ساعت </Link>

              <article className='flex  mt-8 px-16 w-full justify-between  flex-wrap'>
                  {watchArray.map(item=> {
                  if(watchArray.findIndex(x=>x.id === item.id) < 3)
                  return <Item arrayData={this.state.items}   data={item} key={item.id}/>})}
              </article>





            </section>
          </div>


          <FooterComponent></FooterComponent>
        </>
      )
    }



  }




}







export { HomePage };
