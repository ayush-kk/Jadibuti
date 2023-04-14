import axios from 'axios';
import { toast } from 'react-toastify';

export function RegisterAction(details) {
 
    return (dispatch) => {
        axios.post("http://localhost:8080/customer/register", details)
            .then(resp => {
                toast.success('Registered Successfully', {
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
                    type : 'register',
                    action : resp.data
                });
                
                
            })
            
            .catch(error=>toast.error('Something went wrong!', {
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