import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
// import { ToastContainer } from "react-toastify";
import { updateOrder } from "../../../store/actions/OrderAction";
import { fetchCustomer } from "../../../store/actions/CustomerActions";
import { fetchMedicineById } from "../../../store/actions/MedicineAction";
import { fetchPrescriptionsByUserId } from "../../../store/actions/PrescriptionAction";
import { fetchOrder } from '../../../store/actions/OrderActions';
// import style from "./updateOrder.module.css";

function UpdateOrder({ update ,medicineId, prescriptionId, orderId ,noOfItems,orderDate,totalCost}) {
    const [delieveryDate, setDelieveryDate] = useState(new Date().toISOString().slice(0, 10));
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleButton = () => {
        const payload = {
            orderId: orderId,
            noOfItems: noOfItems,
            status: update,
            orderDate: orderDate,
            delieveryDate: delieveryDate,
            totalCost: totalCost,
            customer: {
                userId: myuser.userId
            },
            medicine: {
                medicineId: medicineId
            },
            prescription: {
                prescriptionId: prescriptionId
            }
        }
        dispatch(updateOrder(payload))

    }

    return (
        <div>
            {
                update !== '' &&
                <button className="btn btn-danger" onClick={handleButton}>{update}</button>

            }

        </div>



    )
}
export default UpdateOrder;