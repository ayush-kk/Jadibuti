import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCustomers } from '../../../store/actions/CustomerActions';
import { Link } from 'react-router-dom';
import AdminHeader from '../../admin/adminHeader/AdminHeader';



function FetchAllCustomers() {

    const customers = useSelector(state => state.CustomerReducer.customers);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchAllCustomers());
    }, [])

    return (
        <div>
            <AdminHeader />
            <div class="table-responsive medicine-table-container">
                <table class="table table-hover" id="job-table">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">userId</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">username</th>
                            <th scope="col">Role</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="text-center tableBody">
                        {
                            customers.length > 0 &&
                            customers.map(customer =>
                                <tr key={customer.userId}>
                                    <td>{customer.userId}</td>
                                    <td className="font-weight-bold">{customer.firstName}</td>
                                    <td className="font-weight-bold">{customer.lastName}</td>
                                    <td>{customer.age}</td>
                                    
                                    <td className="font-weight-bold">{customer.gender}</td>
                                    <td >{customer.email}</td>
                                    <td className="font-weight-bold">{customer.phoneNumber}</td>
                                    <td className="font-weight-bold">{customer.username}</td>
                                    <td className="font-weight-bold">{customer.role}</td>
                                    <td className="btn"><Link to={`/admin/customer/${customer.userId}`}>view</Link></td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default FetchAllCustomers;