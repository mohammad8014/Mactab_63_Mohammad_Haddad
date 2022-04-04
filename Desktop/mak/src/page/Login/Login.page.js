
import React, {useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage(props) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [res , setRes] = useState();
  const Navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3002/products");
      const data = await response.json();
      setUsers(data);
    }

    fetchData();
    if(localStorage.getItem("token") !== "") {
      Navigate("/PanelPage" , {replace : true})
    }
  }, []);


  const Login = () => {
    const axios = require('axios').default;
    axios({
        method: "post",
        url: "http://localhost:3002/auth/login",
        data: {

          "username": emailRef.current.value,
          "password": passwordRef.current.value
        }
      })
        .then((response) => localStorage.setItem("token" , response.data.token))
        .then((response)=>Navigate("/PanelPage" , {replace : true}))
        .catch((error) => setError('لطفا فیلد هارا به درستی کامل کنید'));

 
  };

  return (
    <div className='  bg-blue-300 p-10 shadow-xl rounded-xl shadow-slate-400/30 max-w-sm mx-auto gap-4 flex flex-col mt-32'>
      <p className='text-center text-red-500'>{error}</p>
      <div className='flex flex-col gap-2'>
        <label htmlFor='username'>نام کاربری</label>
        <input
          ref={emailRef}
          type={"text"}
          className=' rounded w-full border py-2 px-4 focus:ring-blue-500 focus:border-blue-500 ring-emerald-200 duration-200'
          required
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='password'>رمز عبور</label>
        <input
          ref={passwordRef}
          type={"text"}
          className=' rounded w-full border py-2 px-4 focus:ring-blue-500 focus:border-blue-500 ring-emerald-200 duration-200'
          required
        />
      </div>

      <button
        onClick={Login}
        className='mt-2 w-full cursor-pointer rounded focus:border-red-300 active:scale-90 duration-200 bg-blue-500 py-2 px-4 text-center font-medium text-green-100 shadow-md'
      >
        ورود
      </button>
      <Link className='text-white-300' to='/'>
        {" "}
        بازگشت به صفحه اصلی
      </Link>

    </div>
  );
}

export {LoginPage};