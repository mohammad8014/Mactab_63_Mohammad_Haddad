import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import styles from './Navigation.module.css';
// import logo from '../../assets/img/logo-1643824651915.png';
import logo from '../../assets/img/logo-1644258891592.png';

import { Link } from 'react-router-dom';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return <>

    <div>
      <nav className={` bg-gray-300 ${styles.container} `}>
        <div className="max-w-9xl  px-4  ">
          <div className="flex items-center justify-between h-14">
            <div className="flex w-full items-center">

              <div className="hidden w-full md:block">
                <div className=" flex justify-between items-baseline space-x-4">
                  <div>
                    {<Link className=" ml-7  hover:bg-gray-400 hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-xl" to='/Login'> مدیریت</Link>}

                    {<Link className="  hover:bg-gray-400 hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-xl" to='/CartPage'>سبد خرید</Link>}
                  </div>

                  <div className={`flex items-center `}>
                    <div className="pt-2 relative mx-auto text-gray-600">
                      <input className="text-base border-1 border-gray-900 bg-gray-200 h-9 px-3 pr-14 rounded-full  text-sm mb-2 mr-10 focus:outline-none"
                        type="search" name="search" placeholder="جست و جوی محصولات" />
                      <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">

                      </button>
                    </div>

                    {<Link className="text-xl hover:bg-gray-400 hover:transition-opacity  hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/'>صفحه اصلی </Link>}

                    {<Link className="text-xl hover:bg-gray-400 hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium mr-5" to='/CategoriesPage'>دسته بندی ها  </Link>}
                  </div>








                </div>
              </div>

              <div className="flex-shrink-0">
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
                  <input className="text-xl border-1 border-gray-900 bg-gray-200 h-9 px-3 pr-14 rounded-full  text-sm mb-2  focus:outline-none"
                    type="search" name="search" placeholder="جست وجوی محصولات" />
                  <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">

                  </button>
                </div>
                <div className=' flex w-full justify-center items-center'>
                  {<Link className=" text-xl  hover:bg-gray-400  hover:text-right hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/Login'>مدیریت</Link>}

                  {<Link className="text-xl hover:bg-gray-400  hover:text-right hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/CartPage'>سبد خرید</Link>}



                  {<Link className="text-xl hover:bg-gray-400  hover:text-right hover:transition-opacity  hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/'>صفحه اصلی </Link>}

                  {<Link className="text-xl hover:bg-gray-400  hover:text-right hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium " to='/CategoriesPage'>دسته بندی ها  </Link>}

                </div>



              </div>
            </div>
          )}
        </Transition>
      </nav>



    </div>








git

































    {/* <nav className={`bg-gray-300   h-16 ${styles.container}`}>
      <div className={`flex justify-between h-16 items-center hidden md:block`}>
        <div className={``}>
          {<Link className=" hover:bg-gray-400 hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/Login'>مدیریت</Link>}

          {<Link className=" hover:bg-gray-400 hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/CartPage'>سبد خرید</Link>}
        </div>

        <div className={`flex justify-between items-center`}>

          <div className="pt-2 relative mx-auto text-gray-600">
            <input className="border-1 border-gray-900 bg-gray-200 h-9 px-3 pr-14 rounded-full  text-sm mb-2 mr-10 focus:outline-none"
              type="search" name="search" placeholder="جست و جو" />
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">

            </button>
          </div>

          {<Link className=" hover:bg-gray-400 hover:transition-opacity  hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/'>صفحه اصلی </Link>}

          {<Link className=" hover:bg-gray-400 hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium mr-3" to='/CategoriesPage'>دسته بندی ها  </Link>}
          <img
            className="h-6"
            src={logo}
            alt="Workflow"
          />
        </div>
      </div>




      <div className="-mr-2  flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
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
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-red block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Reports
              </a>
            </div>
          </div>
        )}
      </Transition>


    </nav> */}



















    {/* 
    <nav className={`bg-gray-300    h-16 ${styles.container}`}>
      <div className="max-w-7xl    px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between h-16">
          <div className={`  w-full `}>

            <div className="flex  items-center justify-between   ">

              <div className='flex items-center  justify-between '>
                <div className={`flex  items-center `}>
                  {<Link className=" hover:bg-gray-400 hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/Login'>مدیریت</Link>}

                  {<Link className=" hover:bg-gray-400 hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/CartPage'>سبد خرید</Link>}
                </div>

                <div className={`flex  items-center`}>

                  <div className="pt-2 relative text-gray-600">
                    <input className="border-1 border-gray-900 bg-gray-200 h-9 px-3 pr-14 rounded-full  text-sm mb-2 mr-10 focus:outline-none"
                      type="search" name="search" placeholder="جست و جو" />
                    <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">

                    </button>
                  </div>

                  {<Link className=" hover:bg-gray-400 hover:transition-opacity  hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/'>صفحه اصلی </Link>}

                  {<Link className=" hover:bg-gray-400 hover:text-gray-900 text-gray-700 px-3 py-2 rounded-md text-sm font-medium mr-3" to='/CategoriesPage'>دسته بندی ها  </Link>}
                  <img
                    className="h-6"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
              </div>



            </div>






          </div>




          <div className="-mr-2  flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
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
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-red block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Reports
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav> */}





  </>;
}






export { Navigation };
