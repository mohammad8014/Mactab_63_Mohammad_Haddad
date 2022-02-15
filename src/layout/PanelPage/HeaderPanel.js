import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-1644258891592.png';


export default function HeaderPanel() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <div>
                <nav className={` bg-gray-700  `}>
                    <div className="max-w-9xl  px-4  ">
                        <div className="flex items-center justify-between h-14">
                            <div className="flex w-full items-center">
                                <div className="hidden w-full md:block">
                                    <div className=" flex justify-between items-baseline space-x-4">
                                        <div className='flex items-center '>
                                            {<Link className="text-xl hover:text-white hover:transition-opacity  hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium" to='/'>صفحه اصلی </Link>}

                                            <span className=" ml-7  hover:bg-gray-400 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium text-xl" > مدیریت</span>
                                            <div className=' ml-10'>
                                                <span className='border border-slate-300 hover:border-indigo-300 cursor-pointer text-black bg-white py-3 px-8'>کالاها</span>

                                                <span className='border border-slate-300 hover:border-indigo-300 cursor-pointer text-black bg-white py-3 px-8'>موجودی و قیمت ها</span>
                                                <span className='border border-slate-300 hover:border-indigo-300 cursor-pointer text-black bg-white py-3 px-8'>سفارش ها</span>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex-shrink-0 flex">
                                    <img
                                        className="h-8 "
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>
                            </div>




                            <div className="-mr-2 flex  md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className=" bg-gray-500 inline-flex  flex-col  p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className=" sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className=" block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="bg-gray-300  md:hidden" id="mobile-menu">
                                <div ref={ref} className="flex flex-col items-end px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <div className=" pt-2 relative mx-auto text-gray-600">

                                    </div>
                                    <div className=' flex w-full justify-center items-center'>
                                        <span className=" text-xl  hover:bg-gray-400  hover:text-right hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" >مدیریت</span>




                                        {<Link className="text-xl hover:bg-gray-400  hover:text-right hover:transition-opacity  hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/'>صفحه اصلی </Link>}
                                        <div className=' '>
                                            <span className='border border-slate-300 hover:border-indigo-300 cursor-pointer text-black bg-white py-1 px-4'>کالاها</span>

                                                <span className='border border-slate-300 hover:border-indigo-300 cursor-pointer text-black bg-white py-1 px-4'>موجودی و قیمت ها</span>
                                                <span className='border border-slate-300 hover:border-indigo-300 cursor-pointer text-black bg-white py-1 px-4'>سفارش ها</span>

                                            </div>

                                    </div>



                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>



            </div>

        </>
    )
}
