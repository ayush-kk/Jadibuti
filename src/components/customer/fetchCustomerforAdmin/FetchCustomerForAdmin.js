import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCustomer } from "../../../store/actions/CustomerActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AdminHeader from "../../admin/adminHeader/AdminHeader";
import '../fetchCustomerforAdmin/FetchCustomerForAdmin.css'

function FetchCustomerForAdmin() {
    const customer = useSelector(state => state.CustomerReducer.customer);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(fetchCustomer(userId));
    }, [userId])

    return (
        <div>
            <AdminHeader />
            <div className="row">
                <div className="col-sm-6 customer-admin-container">
                    <div className="card w-100 customer-admin-card">
                        <div className="card-body customer-admin-card-body">
                            <h5 className="card-title">User Details</h5>
                            {
                                customer !== null &&
                                <div><p className="card-text">User Id:{customer.userId}</p>
                                    <p className="card-text">First Name:{customer.firstName}</p>
                                    <p className="card-text">Last Name:{customer.lastName}</p>
                                    <p className="card-text">Gender:{customer.gender}</p>
                                    <p className="card-text">Email:{customer.email}</p>
                                    <p className="card-text">Phone Number:{customer.phoneNumber}</p>
                                    <p className="card-text">username:{customer.username}</p>
                                    <p className="card-text">role:{customer.role}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card w-100 customer-admin-card">
                        <div class="card-body customer-admin-card-body">
                            <h5 class="card-title">Address </h5>
                            {
                                customer !== null &&
                                <div><p className="card-text">Address Id:{customer.address.addressId}</p>
                                    <p className="card-text">H No:{customer.address.houseNumber}</p>
                                    <p className="card-text">Street:{customer.address.street}</p>
                                    <p className="card-text">landmark:{customer.address.landmark}</p>
                                    <p className="card-text">City:{customer.address.city}</p>
                                    <p className="card-text">State:{customer.address.state}</p>
                                    <p className="card-text">Pin Code:{customer.address.pinCode}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FetchCustomerForAdmin;