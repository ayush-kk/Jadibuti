import { ADD_ORDER, FETCH_ALL_ORDERS, FETCH_ORDERS_BY_STATUS, FETCH_ORDERS_BY_USER_ID, FETCH_ORDER_BY_ID } from "../../AppConstants";

const intialState ={
    orders:[],
    order: null,
    ordersByStatus : [],
    addOrder: null,
    orderbyId: null,
    orderByUserId: []
    
}

export default function OrderReducer(state=intialState,action){
    console.log(action.payload);
    if(action.type===FETCH_ALL_ORDERS){
        return{
            ...state,
            orders : action.payload
        }
    }else if(action.type===FETCH_ORDER_BY_ID){
        return{
            ...state,
            order:action.payload
        }
    }else if(action.type=== FETCH_ORDERS_BY_STATUS){
        return{
            ...state,
            ordersByStatus:action.payload
        }
    }
    else if (action.type === ADD_ORDER) {
        return {
            ...state,
             addOrder: action.payload
        }
    }
    else if (action.type === FETCH_ORDERS_BY_USER_ID) {
        return {
            ...state,
            orderwithId: action.payload
          }
    }
    else if (action.type === 'order/orderbyuserid') {
        return {
            ...state, 
            orderByUserId: action.payload
        }
    }
    else if(action.type === 'order/update'){
        return{
            ...state, 
            order: action.payload
        }
    }
    
    else { return state; }
}
