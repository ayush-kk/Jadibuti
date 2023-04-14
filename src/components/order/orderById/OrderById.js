import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOrder } from "../../../store/actions/OrderActions";
import AdminHeader from "../../admin/adminHeader/AdminHeader";
import styling from "./orderById.module.css";

function OrderById() {
  const orderbyid = useSelector((state) => state.OrderReducer.order);
  const dispatch = useDispatch();
  const { orderId } = useParams();

  useEffect(() => {
    dispatch(fetchOrder(orderId));
  }, [orderId]);

  return (
    <div>
      <div>
        <AdminHeader />
      </div>
      <div>
        <div className={styling.container}>
          {orderbyid !== null && (
            <div className={styling.row}>
              <div className={styling.column}>
                <div className={styling.customerGrid}>
                  <h2>Customer</h2>
                  <div className={styling.customerInfo}>
                    <p>
                      <span>Customer Id:</span> {orderbyid.customer.userId}
                    </p>
                    <p>
                      <span>Name:</span> {orderbyid.customer.firstName}{" "}
                      {orderbyid.customer.lastName}
                    </p>
                    <p>
                      <span>Age:</span> {orderbyid.customer.age}
                    </p>
                    <p>
                      <span>Gender:</span> {orderbyid.customer.gender}
                    </p>
                    <p>
                      <span>Email:</span> {orderbyid.customer.email}
                    </p>
                    <p>
                      <span>Prescription Id:</span>{" "}
                      {orderbyid.prescription.prescriptionId}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styling.column}>
                <div className={styling.medicneGrid}>
                  <div className={styling.medicineInfo}>
                    <h2>Medicine</h2>
                    <p>
                      <span>Medicine Id:</span> {orderbyid.medicine.medicineId}
                    </p>
                    <p>
                      <span>Name:</span> {orderbyid.medicine.medicineName}
                    </p>
                    <p>
                      <span>Comapany Name:</span>{" "}
                      {orderbyid.medicine.companyName}
                    </p>
                    <p>
                      <span>Medicine Price:</span>
                      {orderbyid.medicine.medicineCost}
                    </p>
                    <p>
                      <span>Manufacture Date:</span>
                      {orderbyid.medicine.manufactureDate}
                    </p>
                    <p>
                      <span>Expiry Date:</span>
                      {orderbyid.medicine.expiryDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styling.column}>
                <div className={styling.orderGrid}>
                  <h2>Order</h2>
                  <div className={styling.orderInfo}>
                    <p>
                      <span>Order Id:</span> {orderbyid.orderId}
                    </p>
                    <p>
                      <span>No. of Items:</span> {orderbyid.noOfItems}
                    </p>
                    <p>
                      <span>Status:</span> {orderbyid.status}
                    </p>
                    <p>
                      <span>Order Date:</span> {orderbyid.orderDate}
                    </p>
                    <p>
                      <span>Expected Delivery Date:</span>{" "}
                      {orderbyid.delieveryDate}
                    </p>
                    <p>
                      <span>Total Cost:</span> {orderbyid.totalCost}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderById;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { fetchOrder } from "../../../Store/Actions/OrderActions";

// import styling from "./orderById.module.css";

// function OrderById() {
//   const orderbyid = useSelector((state) => state.OrderReducer.order);
//   const dispatch = useDispatch();
//   const { orderId } = useParams();

//   useEffect(() => {
//     dispatch(fetchOrder(orderId));
//   }, [orderId]);

//   return (
//     <div className={styling.container}>
//       {orderbyid !== null && (
//         <>
//           <div className={styling.customerGrid}>
//             <h2>Customer</h2>
//             <div className={styling.customerInfo}>
//               <p>
//                 <span>Customer Id:</span> {orderbyid.customer.userId}
//               </p>
//               <p>
//                 <span>Name:</span> {orderbyid.customer.firstName}{" "}
//                 {orderbyid.customer.lastName}
//               </p>
//               <p>
//                 <span>Age:</span> {orderbyid.customer.age}
//               </p>
//               <p>
//                 <span>Gender:</span> {orderbyid.customer.gender}
//               </p>
//               <p>
//                 <span>Email:</span> {orderbyid.customer.email}
//               </p>
//               <p>
//                 <span>Prescription Id:</span>{" "}
//                 {orderbyid.prescription.prescriptionId}
//               </p>
//             </div>
//             {/* <div className={styling.addressInfo}>
//                             <h3>Address</h3>
//                             <p>
//                                 <span>Street:</span> {orderbyid.customer.address.street}
//                             </p>
//                             <p>
//                                 <span>City:</span> {orderbyid.customer.address.city}
//                             </p>
//                             <p>
//                                 <span>State:</span> {orderbyid.customer.address.state}
//                             </p>
//                             <p>
//                                 <span>Zip:</span> {orderbyid.customer.address.zip}
//                             </p>
//                         </div> */}
//           </div>
//           <div className={styling.orderGrid}>
//             <h2>Order</h2>
//             <div className={styling.orderInfo}>
//               <p>
//                 <span>Order Id:</span> {orderbyid.orderId}
//               </p>
//               <p>
//                 <span>No. of Items:</span> {orderbyid.noOfItems}
//               </p>
//               <p>
//                 <span>Status:</span> {orderbyid.status}
//               </p>
//               <p>
//                 <span>Order Date:</span> {orderbyid.orderDate}
//               </p>
//               <p>
//                 <span>Expected Delivery Date:</span> {orderbyid.delieveryDate}
//               </p>
//               <p>
//                 <span>Total Cost:</span> {orderbyid.totalCost}
//               </p>
//             </div>
//           </div>
//           <div className={styling.medicneGrid}>
//             <div className={styling.medicineInfo}>
//               <h2>Medicine</h2>
//               <p>
//                 <span>Name:</span> {orderbyid.medicine.medicineName}
//               </p>
//               <p>
//                 <span>Comapany Name:</span> {orderbyid.medicine.companyName}
//               </p>
//               <p>
//                 <span>Medicine Price:</span>
//                 {orderbyid.medicine.medicineCost}
//               </p>
//               <p>
//                 <span>Manufacture Date:</span>
//                 {orderbyid.medicine.manufactureDate}
//               </p>
//               <p>
//                 <span>Expiry Date:</span>
//                 {orderbyid.medicine.expiryDate}
//               </p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default OrderById;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import { fetchOrder } from '../../../Store/Actions/OrderActions';

// import styling from "./orderById.module.css";
// function OrderById() {
//     const orderbyid = useSelector(state => state.OrderReducer.order);
//     const dispatch = useDispatch();
//     const { orderId } = useParams();

//     useEffect(() => {
//         dispatch(fetchOrder(orderId));
//     }, [orderId])

//     return (
//         <div className={styling.container}>
//             {
//                 orderbyid !== null &&
//                 <div className="orderbyid">
//                         <table className='table table-bordered'>
//                             <thead >
//                                 <tr>
//                                     <th>Order Id</th>
//                                     <th>Customer Id</th>
//                                     <th>Customer Name</th>
//                                     <th>No of items</th>
//                                     <th>Status</th>
//                                     <th>Order Date</th>
//                                     <th>Expected Delivery Date</th>
//                                     <th>Total Cost</th>
//                                     <th>Medicine Name</th>
//                                     <th>Prescription Id</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>{orderbyid.orderId}</td>
//                                     <td>{orderbyid.customer.userId}</td>
//                                     <td>{orderbyid.customer.firstName} {orderbyid.customer.lastName}</td>
//                                     <td>{orderbyid.noOfItems}</td>
//                                     <td>{orderbyid.status}</td>
//                                     <td>{orderbyid.orderDate}</td>
//                                     <td>{orderbyid.delieveryDate}</td>
//                                     <td>{orderbyid.totalCost}</td>
//                                     <td>{orderbyid.medicine.medicineName}</td>
//                                     <td>{orderbyid.prescription.prescriptionId}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//             }
//             <div className='updatebtn'>
//             <a><Link to={"/order/update"}>update Order</Link></a>
//             </div>
//         </div>
//     )
// }
// export default OrderById;
