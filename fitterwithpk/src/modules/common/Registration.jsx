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
import { registerUser } from "./LoginServices";
import { useLocation } from "react-router-dom";
import GuestSideBar from "./GuestSideBar";
const Register = ({ tabChange }) => {
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

        registerUser(reqParams).then((res) => {
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
            <GuestSideBar currentPath={currentPath} />
            <section>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="login_form form">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1>Register</h1>
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

                                    {/* <div className="form-group">
                                        <label htmlFor="age">Age</label>
                                        <Controller
                                            name="age"
                                            control={control}
                                            rules={{ required: 'Age is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText type="number" placeholder="Age" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.value)} />
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="weight">Weight</label>
                                        <Controller
                                            name="weight"
                                            control={control}
                                            rules={{ required: 'Weight is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText type="number" placeholder="Weight" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.value)} />
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="height">Height</label>
                                        <Controller
                                            name="height"
                                            control={control}
                                            rules={{ required: 'Height is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText type="number" placeholder="Height" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.value)} />
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div> */}

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

                                    {/* <div className="form-group">
                                        <label htmlFor="profession">Profession</label>
                                        <Controller
                                            name="profession"
                                            control={control}
                                            rules={{ required: 'Profession is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText placeholder="Profession" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div> */}

                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <Controller
                                            name="username"
                                            control={control}
                                            rules={{ required: 'Username is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText placeholder="Username" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Controller
                                            name="password"
                                            control={control}
                                            rules={{ required: 'Password is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText type="password" feedback={false} toggleMask className="form-control" placeholder="Enter Password" value={field.value} onChange={(e) => field.onChange(e.target.value)} />
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="repassword">Re Type Password</label>
                                        <Controller
                                            name="repassword"
                                            control={control}
                                            rules={{ required: 'Password is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <InputText type="password" feedback={false} toggleMask className="form-control" placeholder="Enter Password" value={field.value} onChange={(e) => field.onChange(e.target.value)} />
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

export default Register