import { React, useState } from 'react';
import { useDispatch } from "react-redux";

function SingleCart(props) {
  const [count, setCount] = useState(1);
  const [ delModal , setDelModal] = useState(false)
  const dispatch = useDispatch();


  function deleteItem ()  {
    setDelModal(false);
    return dispatch({ type: 'DEL', payload: props.data.id });
  }
  return (
    <>      {delModal == true &&
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
      <tr>
        <td className="p-4 px-6 flex flex-row items-center justify-center">
          <span className="text-xl cursor-pointer px-2 py2" onClick={() => setCount(count + 1)}><i class="las la-plus"></i></span>
          <span className="text-xl px-4 py2">{count}</span>
          <span className="text-xl cursor-pointer px-2 py2" onClick={() => count == 1 ? setDelModal(true) : setCount(count - 1)}><i class="las la-minus"></i></span>
        </td>
        <td className="p-4 px-6 text-center whitespace-nowrap" id="price">{props.data.price}</td>
        <td className="p-4 px-6 text-center whitespace-nowrap">{props.data.firstName}</td>
        <td className="p-4 px-6 text-center whitespace-nowrap">
          <button className="px-2 py-0 text-red-100 bg-red-600 rounded" onClick={() => setDelModal(true)}>
            x
          </button>
          <span className="cursor-pointer ml-4" onClick={() => setDelModal(true)}>حذف</span>

        </td>
      </tr>
    </>
  )
}

export default SingleCart;