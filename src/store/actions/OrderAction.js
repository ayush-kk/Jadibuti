import axios from 'axios';
import {  BASE_URL } from '../../AppConstants';

export function viewAllOrders() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/orders/allOrders").then(resp => {
            dispatch({ type: "order/allorders", payload: resp.data });
        })
    }
}

export function addOrder(order) {
    return dispatch => {
        return axios.post(BASE_URL+"/orders/addorder", order)
            .then(resp => { 
                alert("order placed Successfully");
            })
            .catch(error => { alert("Order failed") })
    }
}

export function orderById(orderId) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/orders/order/" + orderId)
            .then(resp => {
                dispatch({ type: 'order/orderbyid', payload: resp.data })
                .catch(error => { alert("Order Not found") })
            })
    }
}

export function orderuserId(userId) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/orders/allOrders/" + userId)
        .then(resp => {
            dispatch({
                 type: "order/orderbyuserid",
                  payload: resp.data 
                })
            
        }).catch(error=>{alert("Order Not found")})
    }
} 

export function updateOrder(payload){
    return (dispatch) => {
        return axios.put(BASE_URL+"/orders/order/update" ,payload).then(resp => {
            alert('order updated successfully')
            // dispatch({ 
            //     type: "order/update", 
            //     payload: resp.data });
        }).catch(error=>alert("failed"))
    }
}

