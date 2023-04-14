import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedicine } from "../../../store/actions/MedicineAction";
import { Link } from "react-router-dom";
import '../../medicine/viewAllMedicinesForAdmin/ViewAllMedicineForAdmin.css'
import AdminHeader from "../../admin/adminHeader/AdminHeader";
import UploadMedicineImage from "../uploadMedicineImage/UploadMedicineImage";
function ViewAllMedicinesForAdmin() {
    const medicines = useSelector((state) => state.medicineReducer.medicines);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllMedicine());
    }, []);
    return (
        <div>
            <AdminHeader />
            <div class="table-responsive medicine-table-container">
                <table class="table table-hover" id="job-table">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">image</th>
                            <th scope="col">MedicineId</th>
                            <th scope="col">Medicine Name</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Manufacture Date</th>
                            <th scope="col">Expiry Date</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody class="text-center tableBody">
                        {
                            medicines.length > 0 &&
                            medicines.map(medicine =>
                                <tr key={medicine.medicineId}>
                                    <td className="font-weight-bold">
                                    <img className="card-img-top hover-zoom" style={{width: 50+'%',borderTopRightRadius:5+"px",borderBottomLeftRadius : (0.25+'rem' - 1+'px') , display:"block" , marginLeft:'auto', marginRight:'auto',marginTop : 20+"px"}}
                                          src={`data:image/jpeg;base64,${medicine.image}`} alt="Card image"></img>
                                    </td>
                                    <td className="font-weight-bold">{medicine.medicineId}</td>
                                    <td className="font-weight-bold">{medicine.medicineName}</td>
                                    <td>{medicine.companyName}</td>
                                    <td className="font-weight-bold">{medicine.manufactureDate}</td>
                                    <td className="font-weight-bold">{medicine.expiryDate}</td>
                                    <td className="font-weight-bold">{medicine.stock}</td>
                                    <td className="font-weight-bold">{medicine.rating}</td>
                                    <td className="font-weight-bold">₹{medicine.medicineCost}</td>
                                    <td className="btn"><Link to={`/medicine/update/${medicine.medicineId}`}>Update</Link></td>





                                </tr>
                            )
                        }

                    </tbody>
                </table>


            </div>
            <button className="btn btn-light"><Link to="/category/all">Add Medicine</Link></button>
        </div>
    )

}
export default ViewAllMedicinesForAdmin;