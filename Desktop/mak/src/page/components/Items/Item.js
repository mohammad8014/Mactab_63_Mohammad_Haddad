// import React from 'react';
import React, { Component } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


export default function Item (props) {
    const dispatch = useDispatch();
    

 

        return (<>

            <div  className=' flex shadow-lg rounded-2xl  mr-1  flex-col'>

                <div className='flex flex-col'>
                    <Link to={`/ProductPage/${props.data.id}`} state={{arrayData : props.arrayData}} class="w-80   min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img src={`http://localhost:3002/files/${props.data.image}`} alt="#" class="w-60 h-96 object-center object-cover lg:w-full lg:h-full"  />
                    </Link>
                    <div className="p-4">
                        <h3 className='text-right dir-r'>نام کالا : <span> {props.data.firstName} </span></h3>
                        <h4 className='text-right mb-2 dir-r'>برند : <span> {props.data.brand} </span></h4>
                        <div className="w-full flex flex-row justify-between items-center dir-r">
                            <p className='text-green-700 text-right'>قیمت : <span> {props.data.price} </span> تومان</p>
                            <button onClick={() => dispatch({ type: 'ADD', payload: props.data.id  })} className="bg-green-600 text-white px-2 rounded-md flex items-center"><i class="las la-cart-plus ml-1 text-2xl"></i>افزودن</button>
                        </div>
                        
                    </div>
                </div>

            </div>


        </>);
    }






export { Item };










