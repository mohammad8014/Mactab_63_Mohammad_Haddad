import { Navigation } from 'coponents/Navigation/Navigation';

import { FooterComponent } from 'layout';
import React from 'react';
import { Link } from 'react-router-dom'


function CartPage() {
  return (<>
    <Navigation></Navigation>
    <div className="container   p-8 mx-auto mt-14 bg-white">
      <div className="w-full bg-gray-300 overflow-x-auto">
        <div className="my-2">
        </div>
        <table className="w-full shadow-inner">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 font-bold whitespace-nowrap">تعداد</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">قیمت</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">کالا</th>
              <th className="px-6 py-3 font-bold whitespace-nowrap">حذف</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <div>
                  <button className="px-2 py-0 shadow">-</button>
                  <input
                    type="text"
                    name="qty"
                    value="1"
                    className="w-12 text-center bg-gray-100 outline-none"
                  />
                  <button className="px-2 py-0 shadow">+</button>
                </div>
              </td>
              <td className="p-4 px-6 text-center whitespace-nowrap">3200000</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">hp</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <button className="px-2 py-0 text-red-100 bg-red-600 rounded">
                  x 
                </button>
                <span className="cursor-pointer ml-4">حذف</span>

              </td>
            </tr>
            <tr>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <div>
                  <button className="px-2 py-0 shadow">-</button>
                  <input
                    type="text"
                    name="qty"
                    value="2"
                    className="w-12 text-center bg-gray-100 outline-none"
                  />
                  <button className="px-2 py-0 shadow">+</button>
                </div>
              </td>
              <td className="p-4 px-6 text-center whitespace-nowrap">2600000</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">آیفون11</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <button className="px-2 py-0 text-red-100 bg-red-600 rounded">
                  x 
                </button>
                <span className="cursor-pointer ml-4">حذف</span>

              </td>
            </tr>
            <tr>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <div>
                  <button className="px-2 py-0 shadow">-</button>
                  <input
                    type="text"
                    name="qty"
                    value="1"
                    className="w-12 text-center bg-gray-100 outline-none"
                  />
                  <button className="px-2 py-0 shadow">+</button>
                </div>
              </td>
              <td className="p-4 px-6 text-center whitespace-nowrap">2800000</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">sumsong</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <button className="px-2 py-0 text-red-100 bg-red-600 rounded">
                  x 
                </button>
                <span className="cursor-pointer ml-4">حذف</span>

              </td>
            </tr>
            <tr>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <div>
                  <button className="px-2 py-0 shadow">-</button>
                  <input
                    type="text"
                    name="qty"
                    value="2"
                    className="w-12 text-center bg-gray-100 outline-none"
                  />
                  <button className="px-2 py-0 shadow">+</button>
                </div>
              </td>
              <td className="p-4 px-6 text-center whitespace-nowrap">18000000</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">لپتاپ lenovo</td>
              <td className="p-4 px-6 text-center whitespace-nowrap">
                <button className="px-2 py-0 text-red-100 bg-red-600 rounded">
                  x 
                </button>
                <span className="cursor-pointer ml-4">حذف</span>

              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-4 space-x-2">
       
          <Link to='/ProductPage' className=" px-6 py-3 text-sm text-white bg-indigo-500 hover:bg-indigo-600">
            نهایی کردن سبد خرید
          </Link>
        </div>
      </div>
    </div>
  
    <FooterComponent></FooterComponent>
    
  </>);
}











export { CartPage };
