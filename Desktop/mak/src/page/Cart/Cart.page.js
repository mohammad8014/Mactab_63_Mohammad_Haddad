import { Navigation } from 'coponents/Navigation/Navigation';
import Pay from "../../assets/img/pay.jfif"
import { FooterComponent } from 'layout';
import { React, useState, useEffect , useRef } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import ourReducer from 'Redux/reduser';
import SingleCart from './SingleCart';


function CartPage(props) {
  const [totalPrice, setTotalPrice] = useState(parseInt(0));
  const [finish, setFinish] = useState(false);
  const [modal, setModal] = useState(false);
  const [name , setName] = useState();
  const [family , setFamily] = useState();
  const [tel , setTel] = useState();
  const [address , setAddress] = useState();
  const [date , setDate] = useState();
  const [ delModal , setDelModal] = useState(false)
  const [token , setToken] = useState("")
  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const familyRef = useRef();
  const telRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();
  var Price = 0;
  // console.log(cartItems);


  useEffect(() => {
    setInterval(reToken, 10000);
    const array = document.querySelectorAll("#price");
    let Num = 0;
    for (let index = 0; index < array.length; index++) {
      Num = (parseInt(array[index].innerHTML) + Num);
    }
    setTotalPrice(Num);
  }, [cartItems])

  function finishHandler() {

    const axios = require('axios');
    axios.post("http://localhost:3002/orders", {
      "username": name,
      "familyName" : family,
      "position": address,
      "price": totalPrice,
      "date": date,
      "tel" : tel,
    }, {
      headers: {
        "Content-Type": 'application/json',
        "token": localStorage.getItem("token"),
      }
    })
      .then((response) => response.data && deleteCart())
      .catch((error) => alert("پرداخت ناموفق!"));
  }
  function deleteCart() {
    alert("پرداخت موفق")
    setFinish(false);
    return dispatch({ type: 'DEL-ALL', payload: "-1" });

  }
  function deleteItem ()  {
    setDelModal(false);
    return dispatch({ type: 'DEL-ALL', payload: "-1" });
  }
  function checkOutHandler () {
    setDate(dateRef.current.value);
    setName(nameRef.current.value);
    setFamily(familyRef.current.value);
    setTel(telRef.current.value);
    setAddress(addressRef.current.value);
    setModal(false);
    setFinish(true);
  }
 function reToken () {
    const axios = require('axios').default;
    axios({
        method: "post",
        url: "http://localhost:3002/auth/login",
        data: {
            "username": "admin",
            "password": "admin"
        }
      })
        .then((response)=>setToken(response.data.token))
        
  }


  return (
    <>

      <Navigation></Navigation>
            {delModal == true &&
              <>
                <div className="flex flex-col justify-center items-center modal-bg">
                  <div className="form-post flex py-10 px-20 flex-col bg-white justify-center items-center w-1-12">
                    <p className="text-md">آیا میخواهید محصول حذف شود؟</p>
                    <div className="w-full flex items-center justify-between">
                      <button className="py-2 px-6 bg-green-600 text-white text-sm rounded-lg" onClick={deleteItem}>بله</button>
                      <button className="py-2 px-6 bg-red-600 text-white text-sm rounded-lg" onClick={()=>setDelModal(false)}>خیر</button>
                    </div>
                  </div>
                </div>
              </>
            }
      <div className="container   p-8 mx-auto mt-14 bg-white">
        {finish == false &&
          <div className="w-full  overflow-x-auto">
            <table className="w-full bg-gray-300 shadow-inner">
              <thead>
                <tr className="bg-green-100">
                  <th className="px-6 py-3 font-bold whitespace-nowrap">تعداد</th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">قیمت</th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">کالا</th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">حذف</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {cartItems && cartItems.map((item) =>
                  <SingleCart data={item} />
                )}
              </tbody>
            </table>
            {cartItems && cartItems.length > 0 &&
              <div className="flex justify-between items-center mt-4 w-full space-x-2 px-96">
                {/* {cartItems.map((item)=>setTotalPrice(totalPrice + item.price))} */}
                <button onClick={() => setModal(true)} className=" px-6 py-3 text-sm text-white bg-green-500  my-8 rounded-xl hover:bg-indigo-600">
                  نهایی کردن سبد خرید
                </button>
                <h1 className="dir-r text-2xl">قیمت کل : <span>{totalPrice}</span></h1>
                <button className="py-2 px-12 bg-red-600 text-white text-sm rounded-lg" onClick={()=>setDelModal(true)}>خالی کردن سبد</button>
              </div>}
          </div>
        }
        {finish == true &&
          <>
            <div className="w-full flex flex-col items-center  overflow-x-auto">
              <div className="w-2/5">
                <img src={Pay} className="w-full" />
              </div>
              <div className="py-16 flex flex-row items-center justify-between w-1/4">
                <button className="py-2 px-12 bg-green-600 text-white text-lg rounded-lg" onClick={finishHandler}>پرداخت</button>
                <button className="py-2 px-12 bg-red-600 text-white text-lg rounded-lg" onClick={() => setFinish(false)}>بازگشت</button>
              </div>
            </div>
          </>
        }
        {modal == true &&
          <>
            <div className="flex justify-center items-center modal-bg">
              <form className="dir-r w-2/3 bg-white px-8 py-8 rounded-lg form-post">
                <i class="las la-times" onClick={()=>setModal(false)}></i>
                <label>
                  نام  :
                  <input ref={nameRef} />
                </label>
                <label>
                  نام خانوادگی :
                  <input ref={familyRef} />
                </label>
                <label>
                  تلفن :
                  <input ref={telRef} />
                </label>
                <label>
                  آدرس :
                  <input ref={addressRef} />
                </label>
                <label>
                  تاریخ :
                  <input ref={dateRef} type="date" />
                </label>
                <div onClick={checkOutHandler} className="bg-green-500 py-2 flex items-center justify-center  rounded-lg">ثبت</div>
              </form>
            </div>
          </>
        }
      </div>

      <FooterComponent></FooterComponent>

    </>);
}











export { CartPage };
