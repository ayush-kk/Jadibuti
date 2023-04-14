import { getAllCategories } from "../../../store/actions/CategoryAction";
import AddCatgory from "../addCategory/AddCategory";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import AdminHeader from "../../admin/adminHeader/AdminHeader";
function ViewAllCategories() {
    const categories = useSelector(state => state.CategoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, [])

    return (
        <div>
            <AdminHeader/>
        <div className="container">
            
            <div class="card-columns">
                <AddCatgory/>
                {
                    categories.length > 0 &&
                    categories.map(category =>
                        <div class="card">
                            <div class="card-body text-center">
                                <h4 class="card-title">{category.categoryName}</h4>
                                <p class="card-text">You can medicines into this category</p>
                                <Link to={`/medicine/add/${category.categoryId}`} className="btn btn-primary stretched-link">Add Medicine</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    )

}
export default ViewAllCategories;