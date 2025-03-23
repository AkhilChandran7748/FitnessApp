import React, { useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { dailyUpdate, weeklyUpdate } from "./UserServices";
import UserSideBar from "./UserSideBar";
import { Calendar } from 'primereact/calendar';
import moment from 'moment';
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from "primereact/toast";
import { FileUpload } from 'primereact/fileupload';
const WeeklyUpdates = ({ tabChange }) => {
    const password = useRef({});
    const [files, setFiles] = useState(null)
    const location = useLocation();
    const currentPath = location.pathname;

    const toast = useRef(null);
    const showToast = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail });
    };
    const defaultValues = {
        diet: 'Yes',
        workout: 'Yes',
        steps: '',
        water: '',
        weight: '',
        sleep: ''
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
        let dateAarray = data.date
        console.log(dateAarray[0] ? moment(dateAarray[0]).format('L') : '', '-', dateAarray[1] ? moment(dateAarray[1]).format('L') : moment(dateAarray[0]).format('L'));

        // let formdata = new FormData()
        // formdata.append("files", files)
        // formdata.append("Day", application_id)
        // let reqParams = {
        //     "Day": moment(data.date).format('L'),
        //     "Steps": data.steps,
        //     "Water": data.water,
        //     "Weight": data.weight,
        //     "Sleep": data.sleep,
        //     "Diet_Follow": data.diet === "Yes" ? 1 : 0,
        //     "WorkOut": data.workout === "Yes" ? 1 : 0,
        // }

        // weeklyUpdate(reqParams).then((res) => {
        //     if (res.data.success) {
        //         reset();
        //         showToast('Daily Updates Saved Succesfully');
        //     }
        // })

        // reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error" style={{ marginBottom: '10px' }}>{errors[name].message}</small> : <small className="p-error" style={{ marginBottom: '10px' }}>&nbsp;</small>;
    };
    const onUpload = (e) => {
        console.log(e);

    }
    return (
        <div className="container">
            <Toast ref={toast} />
            <UserSideBar />
            {/* <GuestSideBar currentPath={currentPath} /> */}
            <section>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="login_form form">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1>Weekly Updates</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <Controller
                                            name="date"
                                            control={control}
                                            rules={{ required: 'Date is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div>
                                                    <Calendar placeholder="Select Date Range" value={field.value} onChange={(e) => field.onChange(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />

                                                    {/* <InputText placeholder="Full Name" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} /> */}
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
                                            rules={{ required: 'Weight  is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div className="p-inputgroup w-full md:w-30rem">
                                                    <InputText type="number" placeholder="Weight" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <span className="p-inputgroup-addon text-icon">kg</span>
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="waist">Waist</label>
                                        <Controller
                                            name="waist"
                                            control={control}
                                            rules={{ required: 'Waist is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div className="p-inputgroup w-full md:w-30rem">
                                                    <InputText type="number" placeholder="Waist" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <span className="p-inputgroup-addon text-icon">in</span>
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fat">Body Fat</label>
                                        <Controller
                                            name="fat"
                                            control={control}
                                            rules={{ required: 'Body Fat Is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div className="p-inputgroup w-full md:w-30rem">
                                                    <InputText type="number" placeholder="Body Fat" id={field.name} value={field.value} className={` ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <span className="p-inputgroup-addon text-icon">%</span>
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="hip">Body Hip</label>
                                        <Controller
                                            name="hip"
                                            control={control}
                                            rules={{ required: 'Hip is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div className="p-inputgroup w-full md:w-30rem">
                                                    <InputText type="number" placeholder="Hip" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <span className="p-inputgroup-addon text-icon">in</span>
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hip">Neck</label>
                                        <Controller
                                            name="neck"
                                            control={control}
                                            rules={{ required: 'Neck is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div className="p-inputgroup w-full md:w-30rem">
                                                    <InputText type="number" placeholder="Neck" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <span className="p-inputgroup-addon text-icon">in</span>
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="chest">Chest</label>
                                        <Controller
                                            name="chest"
                                            control={control}
                                            rules={{ required: 'Chest is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div className="p-inputgroup w-full md:w-30rem">
                                                    <InputText type="number" placeholder="Chest" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <span className="p-inputgroup-addon text-icon">in</span>
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="arm">Upper Arm</label>
                                        <Controller
                                            name="arm"
                                            control={control}
                                            rules={{ required: 'Upper Arm is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div className="p-inputgroup w-full md:w-30rem">
                                                    <InputText type="number" placeholder="Upper Arm" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <span className="p-inputgroup-addon text-icon">in</span>
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="chest">Quadriceps</label>
                                        <Controller
                                            name="quad"
                                            control={control}
                                            rules={{ required: 'Quadriceps is required.' }}
                                            render={({ field, fieldState }) => (
                                                <div className="p-inputgroup w-full md:w-30rem">
                                                    <InputText type="number" placeholder="Upper Arm" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                    <span className="p-inputgroup-addon text-icon">in</span>
                                                    <div>{getFormErrorMessage(field.name)}</div>
                                                </div>
                                            )}
                                        />
                                        <div className="form-group">
                                            <label htmlFor="chest">upload Images</label>

                                            <input type="file"
                                                className={`form-control`}
                                                multiple
                                                accept='image/x-png,image/gif,image/jpeg'
                                                onChange={(e) => {
                                                    onUpload(e.target.files)
                                                }} />
                                        </div>

                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                        <Button label="Submit" className="btn-block" severity="info" />
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

export default WeeklyUpdates


