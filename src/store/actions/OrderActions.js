import axios from 'axios';
import { BASE_URL, FETCH_ALL_ORDERS, FETCH_ORDERS_BY_STATUS, FETCH_ORDER_BY_ID } from '../../AppConstants';
export function fetchAllOrders(){
    return(dispatch)=>{
       return axios.get(BASE_URL+'/orders/allOrders').then(resp=>{
        dispatch({
            type: FETCH_ALL_ORDERS,
            payload:resp.data
        });
       })
    }
}
export function fetchOrder(oid){

    return(dispatch)=>{
        return axios.get(BASE_URL+'/orders/order/'+oid).then(resp=>{
         dispatch({
             type:FETCH_ORDER_BY_ID,
             payload:resp.data
         });
        })
     }
}

export function fetchAllOrdersByStatus(status){
    return dispatch =>{
        return axios.get("http://localhost:8080/orders/"+status).then(resp=>{
            dispatch({
                type:FETCH_ORDERS_BY_STATUS,
                payload:resp.data
            })
        })
    }
}