import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/actions/LoginAction';
import './Login.css';
import { ToastContainer } from 'react-toastify';
function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    const loginUser = useSelector(state => state.loginReducer.loginUser);


    const dispatch = useDispatch();

    const doLogin = () => {
        let errors = {};
        if (!userName) {
            errors['userNameError'] = 'username is required';
        }
        if (!password) {
            errors['passwordError'] = 'Password is required';
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const payLoad = {
                username: userName,
                password: password
            }
            dispatch(userLogin(payLoad));
        }
        if (loginUser !== null) {

            const role = loginUser.role;
            if (role === 'customer') {
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            }
            if (role === 'admin') {
                setTimeout(()=>{
                    navigate("/admin") 
                },1000)             
            }

        }

    }
    return (
        <div className='container' id='grand-parent-div'>
            <div className='total-login-div' id='parent-div'>
                <div className='card-body'>
                    <h3 className="card-title text-center">Login</h3>
                    <div className='card-text'>
                        <div id='login-form'>
                            <div>
                                <label>Username</label>
                                <input type="text" name="userName" value={userName}
                                    className="form-control-username form-control-sm"
                                    onChange={event => setUserName(event.target.value)} 
                                    style={{border:" 1px solid #ccc"}}
                                    />
                                {
                                    formErrors.userNameError &&
                                    <div style={{ color: 'red' }}>
                                        {formErrors.userNameError}
                                    </div>
                                }
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" name="password" value={password}
                                    className="form-control form-control-sm"
                                    onChange={event => setPassword(event.target.value)} />
                                {
                                    formErrors.passwordError &&
                                    <div style={{ color: 'red' }}>
                                        {formErrors.passwordError}
                                    </div>
                                }
                            </div>
                            <div>
                                <button onClick={doLogin} className="btn btn-primary btn-block" id='btn-signin'> Sign in </button>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={1000}
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
                        <div class="sign-up">
                            Don't have an account? <Link to="/register"> Create One</Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}
export default Login;