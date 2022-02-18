import { FooterComponent } from 'layout';
import React from 'react';

function SideCategries() {
    return <>
        <div className="bg-gray-200">
            <div className="flex flex-col sm:flex-row sm:justify-end">
                <div className="w-64 h-screen bg-white border-l border-gray-700">
                  

                    <nav className="mt-1  ">
                        <a className="py-2 px-8  text-gray-700 " href="#">
                            <div className="flex border-r-4 border-gray-700 justify-end items-center py-2  bg-gray-200 text-gray-700  ">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span className="mx-4 font-bold text-xl">لپ تاپ  </span>

                            </div>
                            <p className='text-lg text-right my-2 mr-7'>لپ تاپ های اپل</p>
                            <p className='text-lg text-right my-2 mr-7'>لپ تاپ های سامسونگ</p>
                            <p className='text-lg text-right my-2 mr-7'>لپ تاپ های سونی</p>
                        </a>
                        <a className="py-2 px-8  text-gray-700 " href="#">
                            <div className="flex border-r-4 border-gray-700 justify-end items-center py-2  bg-gray-200 text-gray-700  ">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span className="mx-4 font-bold text-xl">موبایل  </span>

                            </div>
                            <p className='text-lg text-right my-2 mr-7'>گوشی های اپل</p>
                            <p className='text-lg text-right my-2 mr-7'>گوشی های سامسونگ</p>
                            <p className='text-lg text-right my-2 mr-7'>گوشی های سونی</p>
                        </a>
                        <a className="py-2 px-8  text-gray-700 " href="#">
                            <div className="flex border-r-4 border-gray-700 justify-end items-center py-2  bg-gray-200 text-gray-700  ">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span className="mx-4 font-bold text-xl">ساعت  </span>

                            </div>
                            <p className='text-lg text-right my-2 mr-7'>گوشی های سامسونگ</p>
                            <p className='text-lg text-right my-2 mr-7'>گوشی های سونی</p>
                        </a>




                    </nav>

                    <div className="absolute bottom-0 my-10">
                        <a className="flex items-center py-2 px-8 text-gray-500 hover:text-gray-600" href="#">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10 7C9.63113 7 9.3076 7.19922 9.13318 7.50073C8.85664 7.97879 8.24491 8.14215 7.76685 7.86561C7.28879 7.58906 7.12543 6.97733 7.40197 6.49927C7.91918 5.60518 8.88833 5 10 5C11.6569 5 13 6.34315 13 8C13 9.30622 12.1652 10.4175 11 10.8293V11C11 11.5523 10.5523 12 10 12C9.44773 12 9.00001 11.5523 9.00001 11V10C9.00001 9.44772 9.44773 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z" fill="currentColor" />
                            </svg>


                            <span className="mx-4 font-medium">پشتیبانی</span>
                        </a>
                    </div>
                </div>


            </div>

        </div>
        <FooterComponent></FooterComponent>

    </>;
}




export { SideCategries };

