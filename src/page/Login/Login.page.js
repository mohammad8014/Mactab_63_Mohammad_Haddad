// import { useState, useRef, useEffect } from "react";

// import { Link, useNavigate } from 'react-router-dom';

// function LoginPage() {

//     const [users, setUsers] = useState([]);
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);

//     useEffect(() => {
//         fetch('http://localhost:3002/users')
//             .then((res) => res.json)
//             .then((data) => setUsers(data))
//             .catch((err) => console.log(err))
//     }, [])

//     const navigator = useNavigate()
//     const [err, setError] = useState("")


//     const Login = ()=> {
//         const user   = {
//             email: emailRef.current.value,
//             password: passwordRef.current.value
//         };
//         console.log("1")

//           users.map((item) => {
//             if (
//                 item.email === user.email && 
//                 item.password === user.password
//             ) {
//               return  navigator(`/PanelPage`);
//             } else {
//                 setError('لطفا فیلد هارا به درستی پر کنید')
//             // console.log(err)


//             }
//         });
//     }

// return (
//     <div className="  bg-white p-10 shadow-xl rounded-xl shadow-slate-400/30 max-w-sm mx-auto gap-4 flex flex-col mt-32">
//         <p className='text-center text-red-500'></p>
//         <div className="flex flex-col gap-2">
//             <label htmlFor="username">نام کاربری</label>
//             <input ref={emailRef} type={"text"} className=" rounded w-full border py-2 px-4 focus:ring-blue-500 focus:border-blue-500 ring-emerald-200 duration-200" required />
//         </div>
//         <div className="flex flex-col gap-2">
//             <label htmlFor="password">رمز عبور</label>
//             <input ref={passwordRef} type={"text"} className=" rounded w-full border py-2 px-4 focus:ring-blue-500 focus:border-blue-500 ring-emerald-200 duration-200" required />
//         </div>

//         <button
//             onClick={Login}
//             className="mt-2 w-full cursor-pointer rounded focus:border-red-300 active:scale-90 duration-200 bg-blue-500 py-2 px-4 text-center font-medium text-green-100 shadow-md">
//             ورود
//         </button>
//         <Link className="text-blue-300" to='/' > بازگشت به صفحه اصلی</Link>
//     </div>
// );
//     };

// export { LoginPage };












//     return users.map(item => {
//         if (item.email === emailRef.current.value &&
//             item.passwordRef === passwordRef.current.value
//         ) {
//             navigator(`/PanelPage`);
//         } else {
//             console.log(err)
//         }
//     })
// }