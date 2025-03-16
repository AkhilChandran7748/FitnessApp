import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { Password } from 'primereact/password';
import { useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import { login } from "./LoginServices";
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
        <div className=" align-center ">
            <InputText placeholder="Username" value={loginData.EmailID} onChange={(e) => onChange('EmailID', e.target.value)} className="p-inputtext-sm margin-b-md" /><br />
            <Password feedback={false} placeholder="Password" value={loginData.password} onChange={(e) => onChange('Password', e.target.value)} className="p-inputtext-sm margin-b-md" />
            {loginError && <div className="error  margin-b-md">Invalid username/password</div>}
            <div className=" ">
                <span className="padding-r-sm">   <Button onClick={onLogin} label="Login" severity="success" size="small" /></span>
                <Button onClick={onClose} label="Cancel" severity="danger" size="small" />
            </div>
        </div>
    </>)
}
export default Login