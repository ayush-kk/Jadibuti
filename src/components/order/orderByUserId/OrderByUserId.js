import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { orderuserId } from '../../../store/actions/OrderAction';
import Sidebar from '../../customer/sidebar/Sidebar';
import NavbarWeb from "../../navbar/NavbarWeb";
import { fetchCustomer } from '../../../store/actions/CustomerActions';


import "./orderByUserId.css";
import UpdateOrder from '../updateOrder/UpdateOrder';

function OrderByUserId() {
    const ordersbyuserid = useSelector(state => state.OrderReducer.orderByUserId);
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    const dispatch = useDispatch();
    const { userId } = useParams();
    // const {orderId} = useParams();

    useEffect(() => {
        dispatch(orderuserId(userId));
        dispatch(fetchCustomer(userId));
    }, [userId])

    return (
        <div>
            <NavbarWeb />

            <div className='row'>
                <div className='col-3'>
                    <Sidebar firstName={myuser.firstName} lastName={myuser.lastName} gender={myuser.gender} />
                </div>
                <div className='col-9 customer-orders-container' style={{ marginTop: 100 + 'px' }}>
                    <div className='container '>

                        {
                            ordersbyuserid !== null &&
                            ordersbyuserid.length > 0 &&
                            ordersbyuserid.map(order =>
                                <div className="row border shadow p-3  bg-white rounded row-order" key={order.orderId}>
                                    <div className="col col-order">
                                        <div>
                                            <b>Ordered Date : </b>
                                            <span>{order.orderDate}</span>
                                        </div>

                                    </div>
                                    <div className="col col-order">
                                        <div>
                                            <b>Name : </b>
                                            <span>{order.medicine.medicineName}</span>
                                            <p><b>Company Name:</b> <span>{order.medicine.companyName}</span></p>
                                        </div>
                                    </div>
                                    <div className="col col-order">
                                        <p><b>Total Amount: </b>₹{order.totalCost}</p>
                                    </div>
                                    <div className="col col-order">
                                        {
                                            order.status === 'Ordered' &&
                                            <div>
                                                <p><b>Status: </b>{order.status}</p>
                                                <p><b>Expected Delivery date: </b>{order.delieveryDate}</p>
                                                <UpdateOrder update='Cancel' medicineId={order.medicine.medicineId} prescriptionId={order.prescription.prescriptionId} orderId={order.orderId} noOfItems={order.noOfItems} orderDate={order.orderDate} totalCost={order.totalCost} />

                                            </div>
                                        }
                                        {


                                            order.status === 'Delivered' &&
                                            <div>
                                                <p><b>Status: </b>{order.status}</p>
                                                <p><b>Delivered date: </b>{order.delieveryDate}</p>
                                                <button className='btn'><Link to={`/order/addorder/${order.medicine.medicineId}`}>Order Again</Link></button>
                                            </div>


                                        }
                                        {


                                            order.status === 'Cancel' &&
                                            <div>
                                                <p><b>Status: </b>{order.status}</p>
                                                <p><b>Cancelled on: </b>{order.delieveryDate}</p>
                                            </div>


                                        }

                                    </div>
                                </div>
                            )


                        }


                    </div>
                </div>

            </div>

        </div>
    )
}
export default OrderByUserId;

