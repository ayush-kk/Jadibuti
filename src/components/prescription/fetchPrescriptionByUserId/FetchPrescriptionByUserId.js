import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrescriptionsByUserId } from "../../../store/actions/PrescriptionAction";
import { useParams } from "react-router-dom";
import Sidebar from "../../customer/sidebar/Sidebar";
import NavbarWeb from "../../navbar/NavbarWeb";
import "./FetchPrescriptionByUserId.modular.css"
import UploadPrescriptionImage from "../uploadPrescriptionImage/UploadPrescriptionImage";

function FetchPrescriptionByUserId() {
    const prescriptions = useSelector(state => state.prescriptionReducer.prescriptions);
    const dispatch = useDispatch();
    const { userId } = useParams();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    useEffect(() => {
        dispatch(fetchPrescriptionsByUserId(userId));
    }, [userId, dispatch])
    return (
        <div>
            <NavbarWeb />
            <div className="row">
                <div className="col-3">
                    <Sidebar firstName={myuser.firstName} lastName={myuser.lastName}/>
                </div>
                <div className="col-9 pre-container">
                    <div className='container pre-con'>
                        <table className='table table-bordered pre-table'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>uploaded Date</th>
                                    <th>valid Upto</th>
                                    <th>Prescription Image</th>
                                    <th></th>

                                </tr>

                            </thead>
                            {
                                prescriptions !== undefined &&
                                prescriptions.length > 0 &&
                                prescriptions.map(prescription =>
                                    <tbody key={prescription.prescriptionId}>
                                        <tr>
                                            <td>{prescription.prescriptionId}</td>
                                            <td>{prescription.uploadDate}</td>
                                            <td>{prescription.validationDate}</td>
                                            <td><img className="card-img-top hover-zoom" style={{width: 50+'%',borderTopRightRadius:5+"px",borderBottomLeftRadius : (0.25+'rem' - 1+'px') , display:"block" , marginLeft:'auto', marginRight:'auto',marginTop : 20+"px"}}
                                          src={`data:image/jpeg;base64,${prescription.image}`} alt="Card image"></img></td>
                                            <UploadPrescriptionImage prescriptionId={prescription.prescriptionId}/>
                                        </tr>

                                    </tbody>

                                )
                            }
                        </table>

                    </div>
                </div>
            </div>




        </div>
    )
}
export default FetchPrescriptionByUserId;