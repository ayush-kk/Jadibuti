import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchAllOrders } from '../../../store/actions/OrderActions';
import AdminHeader from '../../admin/adminHeader/AdminHeader';
import Layout from '../../layout/Layout';
import UpdateOrder from '../updateOrder/UpdateOrder';
function FetchAllOrders() {
    //reciver and sender
    const orders = useSelector(state => state.OrderReducer.orders);
    const dispatch = useDispatch();
    //useEffect for CompoundDidMount and render
    useEffect(() => {
        dispatch(fetchAllOrders())
    }, [])

    return (
        <div>
               <AdminHeader/>
                <div className='container main-div'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>orderId</th>
                                <th>noOfItems</th>
                                <th>orderDate</th>
                                <th>delieveryDate</th>
                                <th>totalCost</th>
                                <th>status</th>
                                <th></th>
                                <th></th>
                            </tr>

                        </thead>
                        {
                            orders.length > 0 &&
                            orders.map(order =>
                                <tbody key={order.orderId}>
                                    <tr>
                                        <td>{order.orderId}</td>
                                        <td>{order.noOfItems}</td>
                                        <td>{order.orderDate}</td>
                                        <td>{order.delieveryDate}</td>
                                        <td><span>₹</span>{order.totalCost}</td>
                                        <td>{order.status}</td>
                                        <td><Link to={`/order/${order.orderId}`}> view</Link></td>
                                        <td>
                                        {
                                            order.status === 'Ordered' &&
                                            <div>
                                                <p><b>Status: </b>{order.status}</p>
                                                <p><b>Expected Delivery date: </b>{order.delieveryDate}</p>
                                                <UpdateOrder update='Delivered' medicineId={order.medicine.medicineId} prescriptionId={order.prescription.prescriptionId} orderId={order.orderId} noOfItems={order.noOfItems} orderDate={order.orderDate} totalCost={order.totalCost} />

                                            </div>
                                        }
                                        </td>
                                    </tr>

                                </tbody>

                            )
                        }
                    </table>
                </div>
               


        </div>
    )
}
export default FetchAllOrders;