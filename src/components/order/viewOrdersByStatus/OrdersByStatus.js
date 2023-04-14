import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllOrdersByStatus } from '../../../store/actions/OrderActions';
import { Link } from 'react-router-dom';
import AdminHeader from '../../admin/adminHeader/AdminHeader';
import UpdateOrder from '../updateOrder/UpdateOrder';

function OrdersByStatus() {
    const orders = useSelector(state => state.OrderReducer.ordersByStatus);
    const dispatch = useDispatch();
    const [status, setStatus] = useState('');

    const onGet = () => {
        dispatch(fetchAllOrdersByStatus(status))
    }

    //    useEffect(()=>{
    //         dispatch(fetchAllOrdersByStatus(status))
    //    },[status])

    return (
        <div>
           <AdminHeader/>
            <div className='container main-div'>
                <div>
                    <div>
                        <select type='text' name='status' style={{ width: '557px', borderRadius: '20px' }}
                            onChange={event => { setStatus(event.target.value) }} >
                            <option value='' >---select---</option>
                            <option value='Ordered' >Order</option>
                            <option value='Delivered'>Delivered</option>
                            <option value='Cancel' >Cancel</option>
                        </select>
                    </div>
                    <div>
                        <button className='btn btn-info' onClick={onGet}>Get</button>
                    </div>
                </div>
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
export default OrdersByStatus;
