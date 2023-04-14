import { addCategory } from "../../../store/actions/CategoryAction";
import { useState } from "react";
// import { Dispatch } from "react";
import { useDispatch } from "react-redux";
function AddCatgory() {
    const [categoryName, setCategoryName] = useState('');
    const [formErrors,setFormErrors] = useState({});
    const dispatch = useDispatch();
    
    const doAdd=()=>{
        let errors ={};
        if(!categoryName){
           errors['categoryNameError'] = 'This field is required';
        }
        setFormErrors(errors);
        if(Object.keys(errors).length===0){
            const payLoad = {
               categoryName : categoryName
            }
            dispatch(addCategory(payLoad));
        } 

    }

    return (
        <div className="cantainer category-container">
            <div class="card">
                <div class="card-body text-center">
                    <h4 class="card-title">Add categories</h4>
                    <div>
                        <input type="text" name="categoryName" value={categoryName}
                            className="form-control form-control-sm" placeholder="Category Name"
                            onChange={event => setCategoryName(event.target.value)} />
                        {
                            formErrors.categoryNameError &&
                            <div style={{ color: 'red' }}>
                                {formErrors.categoryNameError}
                            </div>
                        }
                    </div>
                    <div>
                        <button onClick={doAdd} className="btn btn-primary btn-block" id='btn-signin'> Add </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddCatgory;