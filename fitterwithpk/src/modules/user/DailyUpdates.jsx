import React, { useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { dailyUpdate } from "./UserServices";
import UserSideBar from "./UserSideBar";
import { Calendar } from 'primereact/calendar';
import moment from 'moment';
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from "primereact/toast";
import { RENDER_URL } from "../../Utils/Urls";
import UserMobileFooter from "./UserMobileFooter";
const DailyUpdates = ({ tabChange }) => {
    const password = useRef({});
    const location = useLocation();
    const currentPath = location.pathname;

    const toast = useRef(null);
    const showToast = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail });
    };
    const defaultValues = {
        date: new Date(),
        diet: 'No',
        workout: 'No',
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
        let reqParams = {
            "Day": moment(data.date).format('L'),
            "Steps": data.steps,
            "Water": data.water,
            "Weight": data.weight,
            "Sleep": data.sleep,
            "Diet_Follow": data.diet === "Yes" ? 1 : 0,
            "WorkOut": data.workout === "Yes" ? 1 : 0,
        }

        dailyUpdate(reqParams).then((res) => {
            if (res.data.success) {
                reset();
                showToast('Daily Updates Saved Succesfully');
                navigate(RENDER_URL.VIEW_DAILY_UPDATES)
            }
        })

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error" style={{ marginBottom: '10px' }}>{errors[name].message}</small> : <small className="p-error" style={{ marginBottom: '10px' }}>&nbsp;</small>;
    };
    return (
        <><UserSideBar />
            <div className="container fit_app_section mt-2">
                <Toast ref={toast} />
                <section>
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="login_form form">
                                    <div className="logo mb-3">
                                        <div className="col-md-12 text-center">
                                            <span className="h4">Daily Updates</span>
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
                                                        <Calendar
                                                            maxDate={new Date()}
                                                            className="p-inputtext-sm form-control margin-b-md"
                                                            id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} placeholder="Select Date" />

                                                        <div>{getFormErrorMessage(field.name)}</div>
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="steps">Steps</label>
                                            <Controller
                                                name="steps"
                                                control={control}
                                                rules={{ required: 'Steps is required.' }}
                                                render={({ field, fieldState }) => (
                                                    <div>
                                                        <InputText type="number" placeholder="Steps" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                        <div>{getFormErrorMessage(field.name)}</div>
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="water">Water Intake</label>
                                            <Controller
                                                name="water"
                                                control={control}
                                                rules={{ required: 'Water Intake Is required.' }}
                                                render={({ field, fieldState }) => (
                                                    <div className="p-inputgroup">
                                                        <InputText type="number" placeholder="Water Intake" id={field.name} value={field.value} className={` ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                        <span className="p-inputgroup-addon text-icon">ltr</span>
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
                                                    <div className="p-inputgroup">
                                                        <InputText type="number" placeholder="Weight" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                        <span className="p-inputgroup-addon text-icon">kg</span>
                                                        <div>{getFormErrorMessage(field.name)}</div>
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="sleep">Sleep</label>
                                            <Controller
                                                name="sleep"
                                                control={control}
                                                rules={{ required: 'Sleep is required.' }}
                                                render={({ field, fieldState }) => (
                                                    <div className="p-inputgroup">
                                                        <InputText type="number" placeholder="Sleep" id={field.name} value={field.value} className={`form-control ${classNames({ 'p-invalid': fieldState.error })}`} onChange={(e) => field.onChange(e.target.value)} />
                                                        <span className="p-inputgroup-addon text-icon">hrs</span>
                                                        <div>{getFormErrorMessage(field.name)}</div>
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diet">Diet Follow</label>
                                            <Controller
                                                name="diet"
                                                control={control}
                                                render={({ field, fieldState }) => (
                                                    <div >
                                                        <RadioButton className="form-control" inputId="dyes" name="diet" value="Yes" onChange={(e) => field.onChange(e.value)} checked={field.value === 'Yes'} />
                                                        <label htmlFor="dyes" className="ml-2">Yes</label>
                                                        <RadioButton inputId="dno" name="diet" value="No" onChange={(e) => field.onChange(e.value)} checked={field.value === "No"} />
                                                        <label htmlFor="dno" className="ml-2">No</label>

                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diet">Workpout Follow</label>
                                            <Controller
                                                name="workout"
                                                control={control}
                                                render={({ field, fieldState }) => (
                                                    <div >
                                                        <RadioButton inputId="wyes" name="diet" value="Yes" onChange={(e) => field.onChange(e.value)} checked={field.value === 'Yes'} />
                                                        <label htmlFor="wyes" className="ml-2">Yes</label>
                                                        <RadioButton inputId="wno" name="diet" value="No" onChange={(e) => field.onChange(e.value)} checked={field.value === "No"} />
                                                        <label htmlFor="wno" className="ml-2">No</label>

                                                    </div>
                                                )}
                                            />
                                        </div>

                                        <hr></hr>

                                        <div className="row shadow m-2">
                                            <Button label="Log Updates" className="col-sm-6 col-md-6 col-lg-12" severity="secondary" />
                                            <Button label="Cancel" className="col-sm-6 col-md-6 col-lg-12" severity="danger" onClick={() => reset()} />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <UserMobileFooter />
        </>
    )
}

export default DailyUpdates


