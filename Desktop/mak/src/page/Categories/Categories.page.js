








import { Item } from 'page/components/Items/Item';
import { SideCategries } from './component/SideCategries';



import { Navigation } from 'coponents/Navigation/Navigation';
import { FooterComponent, Header } from 'layout';
import {React , useState , useEffect} from 'react'
import { Link , useParams } from 'react-router-dom'
import Pagination from 'page/ControlPanel/components/Pagination';



function CategoriesPage () {

  const [items , setItems] = useState([])
  const [loading , setLoading] = useState(true)
  const {slug} = useParams();

  useEffect(()=>{
    fetch("http://localhost:3002/products")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          setLoading(false);

        }
      )
      console.log(slug);
  },[slug])










      return (
        <>
        <Navigation></Navigation>
          <div className='flex justify-between w-full items-start bg-slate-100'>

                {slug ?
                <div className=' w-full  px-8 py-8 dir-r grid-cate'>
                
                {items.map((item) => item.category == slug && <Item   data={item} key={item.id}/>)}

                </div>
                :
                <div className=' w-full  px-8 py-8 dir-r grid-cate'>
                
                {items.map((item) =>  <Item   data={item} key={item.id}/>)}

                </div>
                }




   <SideCategries/>


          </div>


          <FooterComponent></FooterComponent>
        </>
      )
    }















export { CategoriesPage };








