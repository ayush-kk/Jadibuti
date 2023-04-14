const initialState ={
    loginUser:null
}

function LoginReducer(state=initialState,action){
    if(action.type==='login/success'){
        return{
            ...state,
            loginUser:action.payload
        }
    }else{
        return state;
    }
}
export default LoginReducer;