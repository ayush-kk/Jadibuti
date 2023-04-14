
import {CUSTOMER_FETCH_ALL,
CUSTOMER_FETCH_BYID,
CUSTOMER_SAVE
} from "../../AppConstants"

const initialState = {
    customers:[],
    customer :null,
    newCustomer:null,
    updatedCustomer: null,
    address:null
}

export default function CustomerReducer(state=initialState,action) {
     console.log(action.payload)
  if(action.type === 'customer/fetchall') {
    return {
        ...state,
        customers : action.payload
    }
  }
  else if(action.type === CUSTOMER_FETCH_BYID) {
    return {
        ...state,
        customer: action.payload
    }
  }

  else if(action.type === 'customer/save') {
    return {
        ...state,
        newCustomer : action.payload
    }
  }

  else if (action.type === 'customer/update') {
    return {
      ...state,
      updatedCustomer: action.payload,
    }
  }
  else if (action.type === 'customeraddress/update') {
   return {
    ...state,
    address:action.payload,
   }
  }
  else {
    return state;
  }

}

