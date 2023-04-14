import AdminHeader from "./adminHeader/AdminHeader";
import { useNavigate } from "react-router-dom";
import '../admin/AdmindashBoard.css'
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllOrders } from "../../store/actions/OrderActions";
import { fetchAllCustomers } from "../../store/actions/CustomerActions";
import { fetchAllMedicine } from "../../store/actions/MedicineAction";

function AdminDashBoard() {
    const navigate=useNavigate();
    const myuser=JSON.parse(localStorage.getItem("myuser"));
    //reciver and sender
    const orders = useSelector(state => state.OrderReducer.orders);
    const customers =useSelector(state=>state.CustomerReducer.customers);
    const medicines = useSelector((state) => state.medicineReducer.medicines);
    useEffect(() => {
      dispatch(fetchAllMedicine());
    }, []);
    const dispatch = useDispatch();
    //useEffect for CompoundDidMount and render
    useEffect(() => {
        dispatch(fetchAllOrders())
    }, [])
    useEffect(()=>{
        dispatch(fetchAllCustomers());
    },[])

    const doLogout=() => {
      if(myuser !==null) {
        localStorage.removeItem("myuser")
        alert("logged out.");
        navigate("/");
      }
    }
    return (
        <div className="container-fluid.no-gutters">
            <AdminHeader />
            <div className="row">
                
                <div className="col-sm-4">
                    <h3 style={{textAlign:'center'}}> <span>Welcome Admin,</span><p>{myuser.firstName+" "+myuser.lastName}</p></h3>
                    
                </div>
                <div className="col-sm-8" style={{height: 400+'px'}}>
                    <div className="card-deck" >
                        <div className="card-body admin-card-body">
                             <p><b>Orders</b></p>
                             {
                                orders.length> 0 ?
                                <p>{orders.length}</p> : <p>0</p>
                             }
                             
                        </div>
                        <div className="card-body admin-card-body" >
                             <p><b>Users</b></p>
                             {
                                customers.length >0 ?
                                <p>{customers.length}</p> : <p>0</p>
                             }
                             
                        </div>
                        <div className="card-body admin-card-body">
                             <p><b>Medicines</b></p>
                             {
                                medicines.length>0?
                                <p>{medicines.length}</p> : <p>0</p>
                             }
                        </div>

                    </div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AdminDashBoard;