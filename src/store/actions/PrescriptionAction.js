import axios from 'axios';
import { BASE_URL, FETCH_PRESCRIPTIONS_USERID } from '../../AppConstants';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export function addPrescription(details) {
    //const nav = useNavigate();
    axios.post('http://localhost:8080/prescriptions/add', details)
        .then(resp => {
            toast.success('Prescription Added', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
           
        })
        .catch(error => toast.error('Unable to add prescription', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }))}

    

export function fetchPrescriptionsByUserId(userId){
    return async dispatch=>{
        return await axios.get(BASE_URL+'/prescriptions/getPrescriptions/'+userId).then(resp=>{
            dispatch({
                type: FETCH_PRESCRIPTIONS_USERID,
                payload:resp.data
            })
        }).catch(error=>{
            alert("No Prescriptions available");
        })
    }
}

export function uploadPrescriptionImage(payload,prescriptionId) {
    return async (dispatch) => {
      return await axios.post(BASE_URL + "/prescriptions/upload/image/" + prescriptionId,
        payload,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      ).then(res => {
          alert(res.data)
        })
        .catch(err => {
          alert("failed to upload")
        })
    }
  }