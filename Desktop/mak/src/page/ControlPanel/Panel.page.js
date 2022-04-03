import { Navigation } from 'coponents/Navigation/Navigation';
import FooterPanel from 'layout/PanelPage/FooterPanel';
import HeaderPanel from 'layout/PanelPage/HeaderPanel';
import { list } from 'postcss';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from './components/Card'
import CardPrice from './components/CardPrice';
import { Pagination } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'




import PanelOrder from './components/PanelOrder';


class PanelPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            currentPage: 1,
            loading: false,
            list: [],
            modal : false,
            imageName:"",
            editId:"",
            delId:"",
            curPage:1,
            pricePage:1,
            orderPage:1,
            activePage:"items",
            orders:[],
            token:"",
            delModal:false
        }
        this.itemName = React.createRef();
        this.itemCate = React.createRef();
        this.itemBrand = React.createRef();
        this.itemCount = React.createRef();
        this.itemPrice = React.createRef();
        this.itemImg = React.createRef();

        this.changePageHandler = this.changePageHandler.bind()
    }

    

    componentDidMount() {

        this.setState({
            loading: true,
            token:localStorage.getItem("token")

        })
        setInterval(this.reToken, 10000);
        const axios = require('axios').default;
        axios.get(`http://localhost:3002/products`)
        .then(res => {
            const item = res.data;
            this.setState({
                list: item,
                loading : false,
            });
        })
    }
    componentDidUpdate() {
        if (this.state.activePage == "orders") {
        const axios = require('axios').default;
        axios.get(`http://localhost:3002/orders`, {
            headers: {
                "Content-Type": 'application/json',
                "token":this.state.token,
            }
        })
        .then(res => {
            const item = res.data;
            this.setState({
                orders: item,
            });
        })
        }
    }


    

    handlePost = () => {
        const axios = require('axios');
        const formData = new FormData();
        formData.append("image", this.itemImg.current.files[0]);
        const config = {
            headers: { 'content-type': 'multipart/form-data' , "token":this.state.token }
           }

        axios.post('http://localhost:3002/upload', formData,config)
        .then(res => {
        this.setState({imageName : res.data.filename});
        })
        .then(this.state.editId=="" ? setTimeout(this.createPost , 1000)  : setTimeout(this.editPost , 1000))
        .catch(err => console.log(err));
    }

    createPost = () => {
        const axios = require('axios');
        axios.post ("http://localhost:3002/products",{
            "username": "admin",
            "password": "admin",
            "firstName": this.itemName.current.value,
            "brand": this.itemBrand.current.value,
            "image": this.state.imageName,
            "thumbnail": "65ddd8b1bbce4d8396b62611147fa1d6",
            "price": this.itemPrice.current.value,
            "count": this.itemCount.current.value,
            "createdAt": "",
            "category": this.itemCate.current.value,
            "headerImage": ""
        },{
            headers: {
                "Content-Type": 'application/json',
                "token":this.state.token,
            }
          })
            .then((response) => response.statusText == "Created" ? this.closeModal(response.statusText) : alert("عملیات ناموفق"))
            .catch((error) => console.log(error));
    }
    editPost = () => {
        const axios = require('axios');
        axios.put(`http://localhost:3002/products/${this.state.editId}`,{
            "username": "admin",
            "password": "admin",
            "firstName": this.itemName.current.value,
            "brand": this.itemBrand.current.value,
            "image": this.state.imageName,
            "thumbnail": "65ddd8b1bbce4d8396b62611147fa1d6",
            "price": this.itemPrice.current.value,
            "count": this.itemCount.current.value,
            "createdAt": "",
            "category": this.itemCate.current.value,
            "headerImage": ""
        },{
            headers: {
                "Content-Type": 'application/json',
                "token":this.state.token,
            }
          })
            .then((response) => response.statusText == "Created" || "OK" ? this.closeModal(response.statusText) : alert("عملیات ناموفق"))
            .catch((error) => console.log(error));
            console.log(localStorage.getItem("token"));
    }
    deletePost = () => {
        const axios = require('axios');
        axios.delete(`http://localhost:3002/products/${this.state.delId}` , {
            headers: {
                "Content-Type": 'application/json',
                "token":this.state.token,
            }
          })
        .then((response) => response.statusText == "OK" ? alert("کالا با موفقیت حذف شد") : alert("عملیات ناموفق"))
        .then((response)=> this.setState({list : this.state.list.filter(item => item.id !== this.state.delId)}))
    }
    changePageHandler = (page) => {
        this.setState({
            currentPage: page,
            curPage:page,
            pricePage:page,
            orderPage:page
        })

    }
    openModal = (event) => {
     
            this.setState({
                modal:true
            })
        
    }
    closeModal =(status) => {
        if(status == "Created" || "OK"){
        alert("کالا با موفقیت ثبت شد")
        this.setState({
            modal:false
        })
        }else{
            this.setState({
                modal:false
            })
        }
        const axios = require('axios').default;
        axios.get(`http://localhost:3002/products`)
        .then(res => {
            const item = res.data;
            this.setState({
                list: item,
                loading : false,
            });
        })
    }
    closeModalI = () => {
        this.setState({
            modal:false
        })
    }
    setEditId = (id) => {
        this.setState({editId : id});
        this.openModal();
    }
    setDelID = (id) => {
        this.setState({delId : id , delModal:true});

        // setTimeout(this.deletePost , 1000)
    }
    itemsPageHandler = page => {
        this.setState({
            curPage: page,
          });
    }
    pricePageHandler = page => {
        this.setState({
            pricePage: page,
          });
    }
    orderPageHandler = page => {
        this.setState({
            orderPage: page,
          });
    }
     deleteItem = () =>  {
        setTimeout(this.deletePost , 1000)
        this.setState({delModal:false})
      }

      reToken = () => {
        const axios = require('axios').default;
        axios({
            method: "post",
            url: "http://localhost:3002/auth/login",
            data: {
                "username": "admin",
                "password": "admin"
            }
          })
            .then((response)=>this.setState({token : response.data.token}))
            
      }

    render() {
        if (this.state.loading)
            return <><p className='animate-pulse text-2xl text-center text-green-900 mt-10' >loading...</p></>
        else {
            return (
                <>


                    <div className="relative">
                    {this.state.delModal == true &&
                        <>
                            <div className="flex flex-col justify-center items-center modal-bg">
                            <div className="form-post flex py-10 px-20 flex-col bg-white justify-center items-center w-1-12">
                                <p className="text-md">آیا میخواهید محصول حذف شود؟</p>
                                <div className="w-full flex items-center justify-between">
                                <button className="py-2 px-6 bg-green-600 text-white text-sm rounded-lg" onClick={this.deleteItem}>بله</button>
                                <button className="py-2 px-6 bg-red-600 text-white text-sm rounded-lg" onClick={()=>this.setState({delModal:false})}>خیر</button>
                                </div>
                            </div>
                            </div>
                        </>
                    }
                      {this.state.modal &&  
                        <div className="flex justify-center items-center modal-bg">
                            <form className="dir-r w-2/3 bg-white px-8 py-8 rounded-lg form-post">
                                <i class="las la-times" onClick={this.closeModalI}></i>
                                <label>
                                    نام کالا :
                                    <input ref={this.itemName} />
                                </label>
                                <label>
                                    دسته بندی :
                                    <select ref={this.itemCate}>
                                        <option value="Laptop">لپ تاپ</option>
                                        <option value="mobile">موبایل</option>
                                        <option value="watch">ساعت</option>
                                    </select>
                                </label>
                                <label>
                                    برند :
                                    <input ref={this.itemBrand} />
                                </label>
                                <label>
                                    تعداد :
                                    <input ref={this.itemCount} />
                                </label>
                                <label>
                                    قیمت :
                                    <input ref={this.itemPrice} />
                                </label>
                                <label>
                                    عکس :
                                    <input type="file" ref={this.itemImg}  />
                                </label>
                                <div onClick={this.handlePost} className="bg-green-500 py-2 flex items-center justify-center  rounded-lg">ثبت</div>
                            </form>
                        </div>
                        }
                        <HeaderPanel active={(d)=>this.setState({activePage : d})}></HeaderPanel>
                        {this.state.activePage == "items" &&
                        <div className="flex mt-20 mb-1 w-full flex-col items-center mb-8">
                            <button onClick={this.openModal} id="createNew" className="bg-green-400 py-2 px-4 text-xl rounded-lg">ثبت کالای جدید</button>
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
                                                    <th scope="col" className="py-3 text-white px-6 text-center text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        تصویر
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.list.map(item => {
                                                if(((this.state.curPage*10) - 10) <= this.state.list.findIndex(x=>x.id === item.id) && this.state.list.findIndex(x=>x.id === item.id) < (this.state.curPage*10) )
                                                    return  (<Card data={item} key={item.id} onClick={this.setEditId} onDel={this.setDelID} />)
                                                    })}

                                            </tbody>

                                        </table>
                                    </div>


                                </div>

                            </div>
                            <Pagination current={this.state.curPage} onChange={this.itemsPageHandler} total={this.state.list.length} />
                        </div>}
                        {this.state.activePage == "price" &&
                        <div className="flex mt-20 mb-1 w-full flex-col items-center mb-8">
                             <div className="overflow-x-auto  w-4/5  sm:-mx-6 lg:-mx-8">
                             <div className="inline-block min-w-full py-2 w-4/5 lg:px-8">

                                 <div className=" min-w-full  overflow-hidden shadow-md sm:rounded-lg">
                                     <table className=" min-w-full">
                                         <thead className="bg-gray-600 dark:bg-gray-700">
                                             <tr>
                                                 <th scope="col" className="py-3  px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-gray-400">
                                                     قیمت
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
                                                 <th scope="col" className="py-3 text-white px-6 text-center text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                     تصویر
                                                 </th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             {this.state.list.map(item => {
                                              if(((this.state.pricePage*10) - 10) <= this.state.list.findIndex(x=>x.id === item.id) && this.state.list.findIndex(x=>x.id === item.id) < (this.state.pricePage*10) )
                                                 return  (<CardPrice data={item} key={item.id} />)
                                            
                                                 })}

                                         </tbody>

                                     </table>
                                 </div>


                             </div>

                         </div>
                         <Pagination current={this.state.pricePage} onChange={this.pricePageHandler} total={this.state.list.length} />
                         </div>
                         
                        }
                        {this.state.activePage == "orders" &&
                             <div className="flex mt-20 mb-1 w-full flex-col items-center mb-28">
                             <div className="overflow-x-auto  w-4/5  sm:-mx-6 lg:-mx-8">
                             <div className="inline-block min-w-full py-2 w-4/5 lg:px-8">

                                 <div className=" min-w-full  overflow-hidden shadow-md sm:rounded-lg">
                                     <table className=" min-w-full">
                                         <thead className="bg-gray-600 dark:bg-gray-700">
                                             <tr>
                                                 <th scope="col" className="py-3 text-white px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                     تاریخ ثبت
                                                 </th>
                                                 <th scope="col" className="py-3 text-white px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                     مبلغ سفارش
                                                 </th>


                                                 <th scope="col" className="py-3 text-white px-6 text-center text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                     نام کاربری
                                                 </th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             {this.state.orders.map((item) => {
                                              if(((this.state.orderPage*10) - 10) <= this.state.orders.findIndex(x=>x.id === item.id) && this.state.orders.findIndex(x=>x.id === item.id) < (this.state.orderPage*10) )
                                             return (<PanelOrder data={item}  />)})}

                                         </tbody>

                                     </table>
                                 </div>


                             </div>

                            </div>
                            <Pagination current={this.state.orderPage} onChange={this.orderPageHandler} total={this.state.orders.length} />
                         </div>
                        }







                     

                    </div>


                    <FooterPanel></FooterPanel>
                </>
            )
        }



    }




}






















export { PanelPage };
