const initialState = {
    customer:null
}
export default function RegisterReducer(state=initialState,action){
    if(action.type==='register'){
        return{
            ...state, customer:action.payload
        }
    }
    return state;
}