import { Navigation } from 'coponents/Navigation/Navigation';
import { FooterComponent } from 'layout';
import {React , useEffect , useState} from 'react';
import { useLocation, useParams } from 'react-router';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";


export default function ProductPage() {
  const {slug} = useParams();
  const [fetch , setFetch] = useState([])
  const axios = require('axios').default;
  const dispatch = useDispatch();

  function getPost() {
    axios.get(`http://localhost:3002/products/${slug}`)
      .then(res => {
        const item = res.data;
        setFetch(item);
      })
  }
  useEffect(()=>{
    getPost();
  },[])


  
  return (<>
    
    <Navigation></Navigation>
    <div className='flex flex-row w-full justify-between items-start dir-r px-16 my-16'>
      <div class="w-4/12 shadow-xl  rounded-2xl shadow-blue-500 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-96 lg:aspect-none">
        <img src={`http://localhost:3002/files/${fetch.image}`} alt="#" class="w-96 object-center object-cover lg:w-full lg:h-full" />
      </div>
      <div className="w-7/12 dir-r">
        <h3 className='text-right text-2xl mb-4 text-green-500'>نام کالا : <span className="text-black-500">{fetch.category}</span></h3>
        <p className='text-right text-xl'>برند : <span className="text-black-500">{fetch.brand}</span></p>
        <p className='text-right text-xl mb-2'>موجودی : <span>{fetch.count}</span></p>
        <p className='text-right'>توضیحات : <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام</span></p>
        <div className="w-full flex flex-row justify-between items-center mt-8">
          <p className="text-2xl">قیمت : <span>{fetch.price}</span> تومان</p>
          <button onClick={() => dispatch({ type: 'ADD', payload: fetch.id  })} className="bg-green-600 text-2xl text-white px-4 py-1 rounded-md flex items-center" ><i class="las la-cart-plus ml-1 text-3xl"></i>افزودن به سبد خرید</button>
        </div>
      </div>
    </div>

    
    <FooterComponent></FooterComponent>

  </>);
}









export { ProductPage };
