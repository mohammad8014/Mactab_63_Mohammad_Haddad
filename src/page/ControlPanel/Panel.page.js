import { Navigation } from 'coponents/Navigation/Navigation';
import FooterPanel from 'layout/PanelPage/FooterPanel';
import HeaderPanel from 'layout/PanelPage/HeaderPanel';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from './components/Card'

import Pagination from './components/Pagination'


class PanelPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [],
            count: 10,
            currentPage: 1,
            loading: false
        }

        this.changePageHandler = this.changePageHandler.bind()
    }



    componentDidMount() {
        this.setState({
            loading: true,

        })

        fetch("https://61895f90d0821900178d7971.mockapi.io/todos")
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

                    <div >

                        <HeaderPanel></HeaderPanel>

                        <div className="flex mt-20 mb-1  w-full justify-center">
                            <div className="overflow-x-auto  w-4/5  sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 w-4/5 lg:px-8">

                                    <div className=" min-w-full  overflow-hidden shadow-md sm:rounded-lg">
                                        <table className=" min-w-full">
                                            <thead className="bg-gray-600 dark:bg-gray-700">
                                                <tr>
                                                    <th scope="col" className="py-3  px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                                        ویرایش/حذف
                                                    </th>
                                                    <th scope="col" className="py-3 text-white px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        رنگ
                                                    </th>
                                                    <th scope="col" className="py-3 text-white px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        دسته بندی
                                                    </th>


                                                    <th scope="col" className="py-3 text-white px-6 text-center text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        نام کالا
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {pageItems.map(item => (<Card data={item} key={item.id} />))}

                                            </tbody>

                                        </table>
                                    </div>


                                </div>

                            </div>

                        </div>








                        <Pagination pages={pages} currentPage={this.state.currentPage} pageHandler={this.changePageHandler} />

                    </div>


                    <FooterPanel></FooterPanel>
                </>
            )
        }



    }




}


















// function PanelPage() {
//     return <>
//         <HeaderPanel></HeaderPanel>
//         <div className="flex mt-20 mb-1  w-full justify-center">
//             <div className="overflow-x-auto  w-4/5  sm:-mx-6 lg:-mx-8">
//                 <div className="inline-block min-w-full py-2 w-4/5 lg:px-8">
//                     <div className=" min-w-full  overflow-hidden shadow-md sm:rounded-lg">
//                         <table className=" min-w-full">
//                             <thead className="bg-gray-600 dark:bg-gray-700">
//                                 <tr>
//                                     <th scope="col" className="py-3  px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
//                                         ویرایش/حذف
//                                     </th>
//                                     <th scope="col" className="py-3 text-white px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                         رنگ
//                                     </th>
//                                     <th scope="col" className="py-3 text-white px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                         دسته بندی
//                                     </th>


//                                     <th scope="col" className="py-3 text-white px-6 text-center text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                         نام کالا
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
//                                     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                                         <span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">ویرایش</span><span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">حذف</span>
//                                     </td>
//                                     <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         خاکستری
//                                     </td>
//                                     <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Laptop
//                                     </td>
//                                     <td className="text-center py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Apple MacBook Pro 17"
//                                     </td>

//                                 </tr>
//                                 <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
//                                     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                                         <span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">ویرایش</span><span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">حذف</span>
//                                     </td>
//                                     <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         خاکستری
//                                     </td>
//                                     <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Laptop
//                                     </td>
//                                     <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Apple MacBook Pro 17"
//                                     </td>

//                                 </tr>
//                                 <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
//                                     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                                         <span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">ویرایش</span><span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">حذف</span>
//                                     </td>
//                                     <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         خاکستری
//                                     </td>
//                                     <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Laptop
//                                     </td>
//                                     <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Apple MacBook Pro 17"
//                                     </td>

//                                 </tr>
//                                 <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
//                                     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                                         <span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">ویرایش</span><span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">حذف</span>
//                                     </td>
//                                     <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         خاکستری
//                                     </td>
//                                     <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Laptop
//                                     </td>
//                                     <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Apple MacBook Pro 17"
//                                     </td>

//                                 </tr>
//                                 <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
//                                     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                                         <span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">ویرایش</span><span className="underline decoration-sky-600 hover:decoration-blue-400 hover:cursor:po ml-2 cursor-pointer text-blue-600/75">حذف</span>
//                                     </td>
//                                     <td className=" py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         خاکستری
//                                     </td>
//                                     <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Laptop
//                                     </td>
//                                     <td className="py-4 text-center px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
//                                         Apple MacBook Pro 17"
//                                     </td>

//                                 </tr>


//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>




//         <div className="mb-10 bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//             <div className="flex-1 flex justify-between sm:hidden">
//                 <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
//                 <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
//             </div>
//             <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">

//                 <div>
//                     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                         <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                             <span className="sr-only">Previous</span>
//                             <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                 <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
//                             </svg>
//                         </a>
//                         <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
//                         <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
//                         <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
//                         <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
//                         <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
//                         <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
//                         <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
//                         <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                             <span className="sr-only">Next</span>
//                             <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                 <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
//                             </svg>
//                         </a>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//         <FooterPanel></FooterPanel>
//     </>;
// }











export { PanelPage };
