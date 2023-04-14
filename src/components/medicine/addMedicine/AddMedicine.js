import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMedicine } from "../../../store/actions/MedicineAction";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./AddMedicine.css";
import { getAllCategories } from "../../../store/actions/CategoryAction";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../admin/adminHeader/AdminHeader";

export default function AddMed() {
  const categories = useSelector((state) => state.CategoryReducer.categories);
  const [medicine, updateMedicine] = useState({
    mname: "",
    mcost: "",
    cname: "",
    mfd: "",
    expd: "",
    stk: "",
    rate: "",
    mdet: "",
    mtype: "",
    ingrdt: "",
    quant: "",
  });

  const [validation, setValidation] = useState({});

  const dispatch = useDispatch();
  const nav = useNavigate();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleButton = () => {
    let errors = {};
    if (!medicine.mname) errors['nameEmp'] = 'this field is required'
    if (!medicine.mcost) errors['costEmp'] = 'this field is required'
    if (!medicine.cname) errors['companyEmp'] = 'this field is required'
    if (!medicine.mfd) errors['mfdEmp'] = 'this field is required'
    if (!medicine.expd) errors['expdEmp'] = 'this field is required'
    if (!medicine.stk) errors['stkEmp'] = 'this field is required'
    if (!medicine.rate) errors['rateEmp'] = 'this field is required'
    if (!medicine.mdet) errors['detEmp'] = 'this field is required'
    if (!medicine.mtype) errors['typEmp'] = 'this field is required'
    if (!medicine.ingrdt) errors['ingrEmp'] = 'this field is required'
    if (!medicine.quant) errors['quantEmp'] = 'this field is required'

    setValidation(errors);
    if (Object.keys(errors).length === 0) {
      const payload = {
        medicineName: medicine.mname,
        medicineCost: medicine.mcost,
        companyName: medicine.cname,
        manufactureDate: medicine.mfd,
        expiryDate: medicine.expd,
        stock: medicine.stk,
        rating: medicine.rate,
        description: {
          details: medicine.mdet,
          medicineType: medicine.mtype,
          ingredients: medicine.ingrdt,
          quantity: medicine.quant,
        },
        category: {
          categoryId: categoryId,
        },
      };

      dispatch(addMedicine(payload));
      setTimeout(() => {
        nav("/category/all");
      }, 2000);
    }
  }

  return (
    <div>
      <AdminHeader />
      <div className="container containermed">
        <div className="row rowmed">
          <div className="col col-med">
            <h2>ADD MEDICINE</h2>
          </div>
        </div>
        <div className="row rowmed">
          <div className="col-sm-6 col-sm-med">
            <label>Medicine Name </label>
            <input
              type="text"
              name="mname"
              value={medicine.mname}
              placeholder="Enter medicine name"
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, mname: event.target.value })} />
              {
                validation.nameEmp &&
                <div style={{color:'red'}}>
                  {validation.nameEmp}
                  </div>
              }

          </div>
          <div className="col-sm-6 col-sm-med">
            <label>Medicine Cost </label>
            <input
              type="number"
              name="mcost"
              value={medicine.mcost}
              placeholder="Enter medicine cost"
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, mcost: event.target.value })
              }
            />
            {
                validation.costEmp && 
                <div style={{color:'red'}}>
                  {validation.costEmp}
                </div>
            }
          </div>
        </div>

        <div className="row rowmed">
          <div className="col colmed">
            <label>Company Name</label>
            <input
              type="text"
              name="cname"
              value={medicine.cname}
              placeholder="Enter company name"
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, cname: event.target.value })
              } />
              {
                 validation.companyEmp &&
                 <div style={{color:'red'}}>
                  {validation.companyEmp}
                 </div>
              }
            
          </div>
        </div>

        <div className="row rowmed">
          <div className="col-sm-6 col-sm-med">
            <label>Manufacture Date</label>
            <input
              type="date"
              name="mfd"
              value={medicine.mfd}
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, mfd: event.target.value })
              }
            />
             {
              validation.mfdEmp &&
              <div style={{color:'red'}}>
                {validation.mfdEmp}
              </div>
            }
          </div>
          <div className="col-sm-6 col-sm-med">
            <label>Expiry Date</label>
            <input
              type="date"
              name="expd"
              value={medicine.expd}
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, expd: event.target.value })
              }
            />
             {
              validation.expdEmp &&
              <div style={{color:'red'}}>
                {validation.expdEmp}
              </div>
            }
          </div>
        </div>

        <div className="row rowmed">
          <div className="col-sm-6 col-sm-med">
            <label>Stock</label>
            <input
              type="number"
              name="stk"
              value={medicine.stk}
              placeholder="Enter the value of stock"
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, stk: event.target.value })
              }
            />
            {
              validation.stkEmp &&
              <div style={{color:'red'}}>
                {validation.stkEmp}
              </div>
            }
          </div>
          <div className="col-sm-6 col-sm-med">
            <label>Rating</label>
            <input
              type="number"
              name="rate"
              value={medicine.rate}
              placeholder="Enter rating"
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, rate: event.target.value })
              }
            />
            {
              validation.rateEmp &&
              <div style={{color:'red'}}>
                {validation.rateEmp}
              </div>
            }
          </div>
        </div>

        <div className="row rowmed">
          <div className="col-sm-6 col-sm-med">
            <label>Medicine Details</label>
            <input
              type="text"
              name="mdet"
              value={medicine.mdet}
              placeholder="Details of medicine"
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, mdet: event.target.value })
              }
            />
            {
              validation.detEmp &&
              <div style={{color:'red'}}>
                {validation.detEmp}
              </div>
            }
          </div>
          <div className="col-sm-6 col-sm-med">
            <label>Type of medicine</label>
            <input
              type="text"
              name="mtype"
              value={medicine.mtype}
              placeholder="Type of medicine"
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, mtype: event.target.value })
              }
            />
            {
              validation.typEmp &&
              <div style={{color:'red'}}>
                {validation.typEmp}
              </div>
            }
          </div>
        </div>

        <div className="row rowmed">
          <div className="col-sm-6 col-sm-med">
            <label>Ingredients</label>
            <input
              type="text"
              name="ingrdt"
              value={medicine.ingrdt}
              placeholder="Enter ingredients"
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, ingrdt: event.target.value })
              }
            />
            {
              validation.ingrEmp &&
              <div style={{color:'red'}}>
                {validation.ingrEmp}
              </div>
            }
          </div>
          <div className="col-sm-6 col-sm-med">
            <label>Quantity</label>
            <input
              type="text"
              name="quant"
              value={medicine.quant}
              placeholder="Enter quantity"
              style={{borderColor: '#ccc'}}
              onChange={(event) =>
                updateMedicine({ ...medicine, quant: event.target.value })
              }
            />
            {
              validation.quantEmp &&
              <div style={{color:'red'}}>
                {validation.quantEmp}
              </div>
            }
          </div>
        </div>

        {/* <div className='row rowmed'>
                <div className='col colmed'>
                    <label for='categoryId'>Category</label>
                    <select  name='categoryId' value={medicine.categoryId}
                        onChange={event => { updateMedicine({ ...medicine, categoryId: event.target.value }) }}  >
                            <option value=''>---select---</option>
                            {
                                categories.length >0 &&
                                categories.map(category=>
                                    <option value={category.categoryId}>{category.categoryName}</option>
                                    )
                                }
                                
                    </select>
                </div>
            </div> */}
        <div className="row rowmed">
          <div className="col colmed">
            <button onClick={handleButton} className="btn btn-primary">
              Add medicine
            </button>
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
    </div >
  );
}
