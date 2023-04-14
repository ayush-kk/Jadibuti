import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL, MEDICINE_FETCH_ALL, MEDICINE_FETCH_BY_ID } from "../../AppConstants";

export function addMedicine(medicine) {
  return (dispatch) => {
    return axios.post('http://localhost:8080/medicine/addMedicine', medicine)
      .then(resp => {
        toast.success('Medicine Added', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
        )
        dispatch({
          type: 'addmedicine',
          action: resp.data
        })
      }
      )
      .catch(error => toast.error('Unable to add medicine', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }))
  }
}

export function uploadMedicineImage(payload, medicineId) {
  return async (dispatch) => {
    return await axios.post(BASE_URL + "/medicine/uploadImage/image/" + medicineId,
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



export function fetchAllMedicine() {
  return (dispatch) => {
    return axios.get(BASE_URL + "/medicine/allMedicines").then((resp) => {
      dispatch({
        type: MEDICINE_FETCH_ALL,
        payload: resp.data,
      });
    });
  };
}

export function fetchMedicineById(id) {
  return async (dispatch) => {
    return await axios.get(BASE_URL + "/medicine/getmedicinebyid/" + id).then((resp) => {
      dispatch({
        type: MEDICINE_FETCH_BY_ID,
        payload: resp.data,
      });
    });
  };


}

export function UpdMed(medicine) {
  return (dispatch) => {
    return axios.put("http://localhost:8080/medicine/updateMedicine", medicine)
      .then(resp => {
        toast.success('Medicine Updated', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        dispatch({
          type: 'updateMed',
          action: resp.data
        })
      })
      .catch(error => toast.error('Something went wrong', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }))

  }
}
