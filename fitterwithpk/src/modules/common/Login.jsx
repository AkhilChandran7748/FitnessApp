import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { Password } from 'primereact/password';
import { useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import { login } from "./LoginServices";
import GuestSideBar from "./GuestSideBar";
const Login = ({ onClose }) => {
    const [loginData, setLoginData] = useState({
        EmailID: '',
        Password: '',
        "LoginType": "normal"
    })
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate();

    const onChange = (path, value) => {
        setLoginData({
            ...loginData,
            [path]: value
        })
    }
    const onLogin = () => {
        login(loginData).then((res) => {
            if (res?.data?.success) {
                console.log(res);
                setLoginError(false)
                const { info } = res.data?.data || {};
                let userData = {
                    token: res.data.data?.token || '',
                    ...info

                }
                localStorage.setItem('userData', JSON.stringify(userData))
                if (info.IsAdmin === 1)
                    navigate(RENDER_URL.ADMIN_DASHBOARD);
                else {

                    navigate(RENDER_URL.STAFF_DASHBOARD);

                }

            } else {
                setLoginError(true)
            }
        }).catch((er) => setLoginError(true))
    }
    return (<>
        {/*  <div class="container">
            <div class="row justify-content-center">
                <div className=" align-center ">
                    <InputText placeholder="Username" value={loginData.EmailID} onChange={(e) => onChange('EmailID', e.target.value)} className="p-inputtext-sm margin-b-md" /><br />
                    <Password feedback={false} placeholder="Password" value={loginData.password} onChange={(e) => onChange('Password', e.target.value)} className="p-inputtext-sm margin-b-md" />
                    {loginError && <div className="error  margin-b-md">Invalid username/password</div>}
                    <div className=" ">
                        <span className="padding-r-sm">   <Button onClick={onLogin} label="Login" severity="success" size="small" /></span>
                        <Button onClick={onClose} label="Cancel" severity="danger" size="small" />
                    </div>
                </div>
            </div>
        </div> */}


        <div className="container">
            <GuestSideBar />

            <section>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="login_form form ">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Login</h1>
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <InputText placeholder="Email address" value={loginData.EmailID} onChange={(e) => onChange('EmailID', e.target.value)} className="p-inputtext-sm form-control margin-b-md" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Password</label>
                                    <InputText type="password" feedback={false} placeholder="Password" value={loginData.password} onChange={(e) => onChange('Password', e.target.value)} className="p-inputtext-sm form-control margin-b-md" />
                                </div>
                                <div className="form-group">
                                    {loginError &&
                                        <p className="text-danger">
                                            Invalid username/password
                                        </p>
                                    }
                                </div>
                                <div className="col-md-12 text-center ">
                                    <Button onClick={onLogin} label="Login" className="btn-block" severity="info" size="small" />
                                    <Button onClick={onClose} label="Cancel" className="btn-block" severity="danger" size="small" />
                                </div>
                                <div className="form-group mt-5">
                                    <p className="text-center">
                                        Don't have account?{" "}
                                        <a href={RENDER_URL.REGISTER_URL} id="signup">
                                            Sign up here
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>



    </>)
}
export default Login