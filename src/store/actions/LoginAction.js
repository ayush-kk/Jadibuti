import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function userLogin(payLoad) {

    return async (dispatch) => {
       return await axios.post("http://localhost:8080/auth/login", payLoad).then(
            resp => {
                toast.success('Login Successfully!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    })

                const myuser = {
                    userId: resp.data.userId,
                    firstName: resp.data.firstName,
                    lastName: resp.data.lastName,
                    role: resp.data.role
                }
                // const loggedInUser = resp.data;
                // const myObj = {
                //     userId : loggedInUser.userId,
                //     firstName : loggedInUser.firstName,
                //     lastName : loggedInUser.lastName,
                //     role : loggedInUser.role
                // }
                localStorage.setItem("myuser", JSON.stringify(myuser));
                // const role = loggedInUser.role;
                // if(role ==='customer'){

                //      navigate("/customer")
                // }
                // if(role ==='admin'){

                //     navigate("/admin")
                // }
                dispatch({
                    type: 'login/success',
                    payload: resp.data
                })
            }
        ).catch(error => toast.error(error.response.data, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }))
    }
}

//