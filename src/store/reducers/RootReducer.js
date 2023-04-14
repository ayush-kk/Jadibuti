import medicineReducer from "./MedicineReducer";
import {combineReducers} from 'redux';
import loginReducer from './LoginReducer'
import CustomerReducer from "./CustomerReducer";
import OrderReducer from "./OrderReducer";
import registerReducer from "./RegisterReducer";
import prescriptionReducer from "./PrescriptionReducer";
import  CategoryReducer from "./CategoryReducer";


const rootReducer = combineReducers({
    medicineReducer,
    loginReducer,
    CustomerReducer,
    OrderReducer,
    registerReducer,
    prescriptionReducer,
    CategoryReducer

    
   
})

export default rootReducer;