import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import logo from '../../assets/img/logo-1643824651915.png';

export default function LoginPage() {
  return (
    <>
      <div className=" mx-auto max-w-6xl p-12">
      <div className="text-center w-full bg-red-300 flex-shrink-0">
                <img
                  className="h-8 "
                  src={logo}
                  alt="Workflow"
                />
              </div>
        <div className="flex items-center justify-center">

          <div className="md:w-1/2   mt-5 md:justify-end w-full md:w-1/2 ">
            <div className="shadow-lg  mx-auto  max-w-sm p-10 pb-20">



              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span> نام کاربری</div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
              </div>

              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span> رمز عبور</div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="jhon@doe.com" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
              </div>
              <div className="mt-6 relative">
                <div className="shadow-md font-medium py-2 px-4 text-green-100
                  cursor-pointer bg-teal-600 rounded text-lg tr-mt  absolute text-center w-full">ورود</div>
              </div>
              


            </div>
            <Link className='text-red-300' to='/'>بازگشت به صفحه اصلی</Link>
          </div>
        </div>
      </div>
    </>
  );
}












export { LoginPage };
