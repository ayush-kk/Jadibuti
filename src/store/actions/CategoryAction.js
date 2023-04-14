import axios from "axios"
import { BASE_URL, CATEGORY_ALL } from "../../AppConstants"

export function addCategory(category){
    return dispatch=>{
        axios.post(BASE_URL+"/category/addCategory",category).then(
            resp=>{
                alert(resp.data);
            }
        ).catch(error=>{
            alert("failed Try again");
        })
    }
}
export function getAllCategories(){
    return async dispatch=>{
       await axios.get(BASE_URL+"/category/all").then(
            resp=>{
                console.log(resp.data);
                dispatch({
                    type: CATEGORY_ALL,
                    payload : resp.data
                })
            }
        )
    }
}