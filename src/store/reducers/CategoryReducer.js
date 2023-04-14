import { CATEGORY_ALL } from "../../AppConstants";

const initialState={
    categories:[]
}

export default function CategoryReducer(state=initialState,action){
        if(action.type === CATEGORY_ALL){
            return{
                ...state,
                categories:action.payload
            }
        }
        else{
            return state;
        }
}