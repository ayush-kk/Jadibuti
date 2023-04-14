import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './registerApp.css'
import { useDispatch } from 'react-redux';
import { RegisterAction } from '../../store/actions/RegisterAction';
import { ToastContainer } from 'react-toastify';
export default function Register() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [usrName, setUName] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [hno, setHno] = useState('');
    const [street, setStreet] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pcode, setPCode] = useState('');
    const [role, setRole] = useState('customer');

    const nav = useNavigate();


    const [validation, setValidation] = useState({});

    const dispatch = useDispatch();

    const handleRegister = () => {
        let errors = {};

        //regex validations
        let userPattern = /^[A-Za-z]+[0-9]+$/
        if (!userPattern.test(usrName)) errors['unameErr'] =
            'Username must start with alphabets and ends with a number'

        let pswdPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
        if (!pswdPattern.test(password)) errors['pswdErr'] =
            'Password must contain atleast one lowercase character, one uppercase character, one special character (!@#$%^&*) with no SPACE'

        let emailPattern = /^[A-Za-z].*[0-9.].*[@][a-z].*[.][a-z]+$/
        if (!emailPattern.test(email)) errors['emailErr'] = 'Invalid email id'
        //empty field validations
        if (!fName) errors['fnameEmp'] = 'this field is required'
        if (!lName) errors['lnameEmp'] = 'this field is required'
        if (!usrName) errors['unameEmp'] = 'this field is required'
        if (!password) errors['pswdEmp'] = 'this field is required'
        if (!age) errors['ageEmp'] = 'this field is required'
        if (!gender) errors['genEmp'] = 'this field is required'
        if (!email) errors['emailEmp'] = 'this field is required'
        if (!phno) errors['phnEmp'] = 'this field is required'
        if (!hno) errors['hnoEmp'] = 'this field is required'
        if (!street) errors['streetEmp'] = 'this field is required'
        if (!landmark) errors['lndEmp'] = 'this field is required'
        if (!city) errors['cityEmp'] = 'this field is required'
        if (!state) errors['stateEmp'] = 'this field is required'
        if (!pcode) errors['pinEmp'] = 'this field is required'

        setValidation(errors);

        if (Object.keys(errors).length === 0) {
            const payload =
            {

                firstName: fName,
                lastName: lName,
                username: usrName,
                password: password,
                age: age,
                gender: gender,
                email: email,
                phoneNumber: phno,
                role: role,
                address: {
                    houseNumber: hno,
                    street: street,
                    landmark: landmark,
                    city: city,
                    state: state,
                    pinCode: pcode,
                    role: role
                }
            }
            dispatch(RegisterAction(payload))
            setTimeout(() => {
                nav('/login');
            }, 2000);


        }
    }
    return (
        <div className='container conReg'>
            <div className='registerAlign'>
                <div className='row rowReg'>
                    <div className='col colReg'>
                        <h2 style={{ fontFamily: 'Segoe UI' }}>Register Yourself</h2>
                    </div>
                </div>
                <div className='row rowReg' style={{ marginTop: '4%' }}>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="fName">First Name </label>
                        <input type="text" name="fName" value={fName}
                            placeholder="Enter your first name"
                            onChange={event => setFName(event.target.value)} />
                        {
                            validation.fnameEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.fnameEmp}
                            </div>
                        }
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="lName">Last Name </label>
                        <input type="text" name="lName" value={lName}
                            placeholder="Enter your last name"
                            onChange={event => setLName(event.target.value)} />
                        {
                            validation.lnameEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.lnameEmp}
                            </div>
                        }
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for='age'>Age</label>
                        <input type='number' name='age' value={age} placeholder='Enter age'
                            onChange={event => setAge(event.target.value)} />
                        {
                            validation.ageEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.ageEmp}
                            </div>
                        }
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for='gen'>Gender</label>
                        <select name='gen' value={gender} onChange={event => setGender(event.target.value)} id='gen'>
                            <option>---SELECT GENDER---</option>
                            <option value='male' >
                                MALE</option>
                            <option value='female'>
                                FEMALE</option>
                        </select>
                        {
                            validation.genEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.genEmp}
                            </div>
                        }
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="Enter your email address" value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        {
                            validation.emailEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.emailEmp}
                            </div>
                        }
                        {
                            validation.emailErr &&
                            <div style={{ color: 'red' }}>
                                {validation.emailErr}
                            </div>
                        }

                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label className='lblreg' for="phno">Mobile Number</label>
                        <input type="number" name="phno" value={phno}
                            placeholder="Enter your mobile number"
                            onChange={event => setPhno(event.target.value)}
                        />
                        {
                            validation.phnEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.phnEmp}
                            </div>
                        }
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label className='lblreg' for='usrname'>Username </label>
                        <input type='text' name='usrname' value={usrName} placeholder='Enter username'
                            onChange={event => setUName(event.target.value)} />
                        {
                            validation.unameErr &&
                            <div style={{ color: 'red' }}>
                                {validation.unameErr}
                            </div>
                        }
                        {
                            validation.unameEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.unameEmp}
                            </div>
                        }
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label className='lblreg' for='passwd'>Password </label>
                        <input type='password' name='password' value={password} placeholder='Enter password'
                            onChange={event => setPassword(event.target.value)} />
                        {
                            validation.pswdEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.pswdEmp}
                            </div>
                        }
                        {
                            validation.pswdErr &&
                            <div style={{ color: 'red' }}>
                                {validation.pswdErr}
                            </div>
                        }
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="hno">House Number</label>
                        <input type="number" name="hno" value={hno}
                            placeholder="Enter your house number"
                            onChange={event => setHno(event.target.value)} />
                        {
                            validation.hnoEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.hnoEmp}
                            </div>
                        }
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="street">Street </label>
                        <input type="text" name="street" value={street}
                            placeholder="Enter street name"
                            onChange={event => setStreet(event.target.value)} />
                        {
                            validation.streetEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.streetEmp}
                            </div>
                        }
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="landmark">Landmark </label>
                        <input type="text" name="landmark" value={landmark} placeholder="landmark"
                            onChange={event => setLandmark(event.target.value)}
                        />
                        {
                            validation.lndEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.lndEmp}
                            </div>
                        }
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="city">City </label>
                        <input type="text" name="city" value={city}
                            placeholder="Enter city name"
                            onChange={event => setCity(event.target.value)} />
                        {
                            validation.cityEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.cityEmp}
                            </div>
                        }
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="state">State </label>
                        <input type="text" name="state" value={state} placeholder="Enter state"
                            onChange={event => setState(event.target.value)} />
                        {
                            validation.stateEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.stateEmp}
                            </div>
                        }
                    </div>
                    <div className='col-sm-6 col-sm-reg'>
                        <label className='lblreg' for="pincode">Pincode </label>
                        <input type="text" name="pincode" value={pcode}
                            placeholder="Enter pincode"
                            onChange={event => setPCode(event.target.value)} />
                        {
                            validation.pinEmp &&
                            <div style={{ color: 'red' }}>
                                {validation.pinEmp}
                            </div>
                        }
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <label className='lblreg'>Role</label>
                        <input type='text' value={role} disabled />
                    </div>
                </div>

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <br />
                        <button className='btn btn-primary text-center' onClick={handleRegister}
                        >Register</button>
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

                <div className='row rowReg'>
                    <div className='col colReg'>
                        <br />
                        <p style={{ textAlign: 'center' }}>Already have an account?<Link to='/login'>
                            Login Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}