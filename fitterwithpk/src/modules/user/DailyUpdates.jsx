import React, { useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from "primereact/inputtext";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from "primereact/inputtextarea";
import { Password } from 'primereact/password';
import { RENDER_URL } from "../../Utils/Urls";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { dailyUpdate } from "./UserServices";
// import GuestSideBar from "./GuestSideBar";
const DailyUpdates = ({ tabChange }) => {
    const password = useRef({});

    const location = useLocation();
    const currentPath = location.pathname;

    const defaultValues = {

    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset,
        register,
        setValue,
        watch,
        setError
    } = useForm({ defaultValues });

    const navigate = useNavigate();
    password.current = watch("password", "");
    const onSubmit = (data) => {
        if (data.password !== data.repassword) {
            setError('repassword')
            setError("repassword", {
                type: "manual",
                message: "Password doest't match!!!",
            })
            return;
        }
        let reqParams = {
            "EmailID": data.email,
            "Password": data.password,
            "FirstName": data.name,
            "LastName": "",
            "Mobile": data.mobile,
            "IsUser": 1,
            "LoginType": "normal"
        }

        dailyUpdate(reqParams).then((res) => {
            if (res.data.success) {
                reset();
                navigate(RENDER_URL.HOME_URL)
            }
        })

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error" style={{ marginBottom: '10px' }}>{errors[name].message}</small> : <small className="p-error" style={{ marginBottom: '10px' }}>&nbsp;</small>;
    };
    return (
        <div className="container">
            {/* <GuestSideBar currentPath={currentPath} /> */}
            <section>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="login_form form">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1>Daily Updates</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <Controller
                                            name="name"
                                            control={control}
                                            rules={{ required: 'Name is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText placeholder="Full Name" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>

                                  

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Controller
                                            name="email"
                                            control={control}
                                            rules={{
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText placeholder="Email" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mobile">Contact</label>
                                        <Controller
                                            name="mobile"
                                            control={control}
                                            rules={{ required: 'Contact is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText placeholder="Contact" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                        <Button label="Submit" className="btn-block" severity="info"/>
                                        <Button label="Cancel" className="btn-block" severity="danger" onClick={() => reset()} autoFocus />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default DailyUpdates


