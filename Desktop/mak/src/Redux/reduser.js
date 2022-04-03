import axios from 'axios';
export const initialState = {
    cartProducts: []
 }
 
 const ourReducer = (state = initialState.cartProducts, action) => {
     if(action.type === "ADD") {
        const axios = require('axios').default;
        axios.get(`http://localhost:3002/products/${action.payload}`)
        .then(res => {
            const item = res.data;
            state.push(item)
            
        })
        return state;
            
        
            
     
     }else if (action.type === "DEL"){
         state = state.filter(item => item.id !== action.payload);
         return state;
     }else if (action.type === "DEL-ALL") {
        state = state.filter(item => item.id == action.payload);
        return state;
     }
    
  }
  export default ourReducer
