import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ToastContainer } from "react-toastify";
import { Header } from "rsuite";

import { UpdMed } from "../../../store/actions/MedicineAction";
import AdminHeader from "../../admin/adminHeader/AdminHeader";
import UploadMedicineImage from "../uploadMedicineImage/UploadMedicineImage";
import { getAllCategories } from "../../../store/actions/CategoryAction";
import { useSelector } from "react-redux";
import './updMed.css';

export default function UpdateMedicine() {
    const [mid, setMId] = useState("");
    const [mname, setMName] = useState("");
    const [mcost, setMCost] = useState("");
    const [cname, setMCompanyName] = useState("");
    const [mfd, setMMFD] = useState("");
    const [expd, setMEXPD] = useState("");
    const [stk, setMStock] = useState("");
    const [rate, setMRating] = useState("");
    const [mdet, setMDetails] = useState("");
    const [mtype, setMType] = useState("");
    const [ingrdt, setMIngredients] = useState("");
    const [quant, setMQuantity] = useState("");
    const [categoryId, setCatId] = useState('');
    const categories = useSelector(state => state.CategoryReducer.categories);
   

    useEffect(() => {
       
    }, [])

    const { medid } = useParams();
    const nav = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:8080/medicine/getmedicinebyid/' + medid)
            .then(resp => {
                setMId(resp.data.medicineId);
                setMName(resp.data.medicineName);
                setMCost(resp.data.medicineCost);
                setMCompanyName(resp.data.companyName);
                setMMFD(resp.data.manufactureDate);
                setMEXPD(resp.data.expiryDate);
                setMStock(resp.data.stock);
                setMRating(resp.data.rating);
                setCatId(resp.data.categoryId);
                setMDetails(resp.data.description.details);
                setMType(resp.data.description.medicineType);
                setMIngredients(resp.data.description.ingredients);
                setMQuantity(resp.data.description.quantity);
                setCatId(resp.data.category.categoryId);
            });
            dispatch(getAllCategories());
    }, [medid])


    const updateButton = () => {
        const payload = {
            medicineId: mid,
            medicineName: mname,
            medicineCost: mcost,
            companyName: cname,
            manufactureDate: mfd,
            expiryDate: expd,
            stock: stk,
            rating: rate,
            description: {

                details: mdet,
                medicineType: mtype,
                ingredients: ingrdt,
                quantity: quant
            },
            category: {
                categoryId: categoryId
            }
        }
        dispatch(UpdMed(payload))
        setTimeout(()=>{
            nav("/admin/medicine/all");
        },2000)
         

    }
    return (

        <>
        <Header>
            <AdminHeader/>
        </Header>
        <div className="container containerUpd">
            <div id='updmed'>
                <h2 style={{marginBottom:'4%'}}>UPDATE MEDICINE</h2>
                <div className="row rowUpd">
                    <div className="col-sm-6 col-sm-upd">
                        <label>Medicine Id</label>
                        <input type='text' name='mid' value={mid} disabled />
                    </div>
                    <div className="col-sm-6 col-sm-upd">
                        <label>Medicine Name</label>
                        <input type='text' name='mname' value={mname} placeholder='entname'
                            onChange={event => setMName(event.target.value)}
                        />
                    </div>
                </div>

                <div className="row rowUpd">
                    <div className="col-sm-6 col-sm-upd">
                        <label>Medicine Cost</label>
                        <input type='number' name='mcost' value={mcost} placeholder='entcost'
                            onChange={event => setMCost(event.target.value)} />
                    </div>
                    <div className="col-sm-6 col-sm-upd">
                        <label>Company Name</label>
                        <input type='text' name='cname' value={cname} placeholder='enter company name'
                            onChange={event => setMCompanyName(event.target.value)} />
                    </div>
                </div>

                <div className="row rowUpd">
                    <div className="col-sm-6 col-sm-upd">
                        <label>Manufacture Date</label>
                        <input type='date' name='mfd' value={mfd}
                            onChange={event => setMMFD(event.target.value)} />
                    </div>
                    <div className="col-sm-6 col-sm-upd">
                        <label>Expiry Date</label>
                        <input type='date' name='expd' value={expd}
                            onChange={event => setMEXPD(event.target.value)} />
                    </div>
                </div>

                <div className="row rowUpd">
                    <div className="col-sm-6 col-sm-upd">
                        <label>Stock</label>
                        <input type='number' name='stk' value={stk} placeholder='enter the value of stock'
                            onChange={event => setMStock(event.target.value)} />
                    </div>
                    <div className="col-sm-6 col-sm-upd">
                        <label>Rating</label>
                        <input type='number' name='rate' value={rate} placeholder='enter rating'
                            onChange={event => setMRating(event.target.value)} />
                    </div>
                </div>

                <div className="row rowUpd">
                    <div className="col colUpd">
                        <label>Medicine Details</label>
                        <input type='text' name='mdet' value={mdet} placeholder='enter the details of the medicine'
                            onChange={event => setMDetails(event.target.value)} />
                    </div>
                </div>

                <div className="row rowUpd">
                    <div className="col-sm-6 col-sm-upd">
                        <label>Medicine Type </label>
                        <input type='text' name='mtype' value={mtype} placeholder='enter the type of the medicine'
                            onChange={event => setMType(event.target.value)} />
                    </div>
                    <div className="col-sm-6 col-sm-upd">
                        <label>Ingredients</label>
                        <input type='text' name='ingrdt' value={ingrdt} placeholder='enter ingredients'
                            onChange={event => setMIngredients(event.target.value)} />
                    </div>
                </div>

                <div className="row rowUpd">
                    <div className="col-sm-6 col-sm-upd">
                        <label>Quantity (in gms)</label>
                        <input type='text' name='quant' value={quant} placeholder='enter quantity'
                            onChange={event => setMQuantity(event.target.value)} />
                    </div>
                    {/* <div className="col-sm-6 col-sm-upd">
                        <label form="catId">Category</label>
                        <select name='catId' id='catId' value={categoryId}
                            onChange={event => setCatId(event.target.value)} required>
                                <option value=''>---select---</option>
                            {
                                categories.length >0 &&
                                categories.map(category=>
                                    <option value={category.categoryId}>{category.categoryName}</option>
                                    )
                            }
                            
                            
                        </select>
                    </div> */}
                    <div className="col-sm-6 col-sm-upd">
                        <label form="catId">Upload Medicine image</label>
                        <UploadMedicineImage medicineId={medid}/>
                    </div>
                </div>

                <div className="row rowUpd">
                    <div className="col colUpd">
                        <button onClick={updateButton} class="btn btn-primary btn-lg btn-block">Update details</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}