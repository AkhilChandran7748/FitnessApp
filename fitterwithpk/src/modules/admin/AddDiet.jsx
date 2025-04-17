import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { RENDER_URL } from '../../Utils/Urls';
import UserSideBar from '../user/UserSideBar';
import { updateDietPlan } from './adminServices';
import AdminSideBar from './AdminSideBar';

const AddDiet = () => {
    const location = useLocation();
    const { IdUser, adminView } = location.state || {};

    const [dietFiles, setDietFiles] = useState(null);
    const [workoutFiles, setWorkoutFiles] = useState(null);
    const toast = useRef(null);

    const showToast = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail });
    };

    const defaultValues = {
        DietName: ''
    };

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('IdUser', IdUser);
        formData.append('DietName', data.DietName);
        if (dietFiles?.length) {
            Array.from(dietFiles).forEach(file => formData.append('DietPlan', file));
        }
        if (workoutFiles?.length) {
            Array.from(workoutFiles).forEach(file => formData.append('WorkOutPlan', file));
        }

        updateDietPlan(formData).then(res => {
            if (res.data.success) {
                reset();
                showToast('Diet Plan added successfully');
                adminView ? navigate(RENDER_URL.ADMIN_DASHBOARD) : navigate(RENDER_URL.STAFF_DASHBOARD)

            }
        }).catch(err => {
            showToast('Error saving diet plan');
            console.error(err);
        });
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <>
            {adminView ? <AdminSideBar /> : <UserSideBar />}
            <section className='container fit_app_section'>
                <Toast ref={toast} />
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card p-4">
                                <h2 className="text-center mb-4">Add Diet & Workout Plan</h2>
                                <div className="form-group mb-3">
                                    <label htmlFor="DietName">Diet Name</label>
                                    <Controller
                                        name="DietName"
                                        control={control}
                                        rules={{ required: 'Diet Name is required.' }}
                                        render={({ field, fieldState }) => (
                                            <div>
                                                <InputText
                                                    id={field.name}
                                                    value={field.value}
                                                    onChange={(e) => field.onChange(e.target.value)}
                                                    className={classNames('form-control', { 'p-invalid': fieldState.error })}
                                                    placeholder="Enter diet name"
                                                />
                                                {getFormErrorMessage(field.name)}
                                            </div>
                                        )}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="DietPlan">Diet Plan File</label>
                                    <input
                                        type="file"
                                        id="DietPlan"
                                        accept="application/pdf"
                                        className="form-control"
                                        onChange={(e) => setDietFiles(e.target.files)}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="WorkOutPlan">Workout Plan File</label>
                                    <input
                                        type="file"
                                        id="WorkOutPlan"
                                        accept="application/pdf"
                                        className="form-control"
                                        onChange={(e) => setWorkoutFiles(e.target.files)}
                                    />
                                </div>

                                <div className="text-center">
                                    <Button label="Submit" severity="secondary" className="me-2" />
                                    <Button label="Cancel" severity="danger" type="button" onClick={() => reset()} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddDiet;
