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
const Register = ({ reload }) => {
    const password = useRef({});
    const [visible, setVisible] = useState(false);
    const FooterContent = () => (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button label="Submit" className="small-button margin-r-10" severity="success" />
            <Button label="Cancel" className="small-button" severity="secondary" onClick={() => setVisible(false)} autoFocus />
        </div>
    );


    const defaultValues = {
        aps_status: 2
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
    } = useForm({ defaultValues });
    password.current = watch("password", "");
    const onSubmit = (data) => {
        console.log(data);

        // addLead(data).then((res) => {
        //     if(res.data.success){
        //         reset();
        //         reload('Lead added successfully');
        //         setVisible(false)  
        //     }
        //             })

        // reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error" style={{ marginBottom: '10px' }}>{errors[name].message}</small> : <small className="p-error" style={{ marginBottom: '10px' }}>&nbsp;</small>;
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card">
            <Splitter >
                <SplitterPanel className=" margin-l-10 block-display" size={40}>
                    <>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Name is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span >
                                        {/* <label htmlFor={field.name}>Name </label> */}
                                        <InputText placeholder="Full Name" id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />

                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>

                                </div>
                            )}
                        />
                        <Controller
                            name="age"
                            control={control}
                            rules={{ required: 'Age is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span>
                                        <InputNumber placeholder="Age" id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />
                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>
                                </div>
                            )}
                        />
                        <Controller
                            name="weight"
                            control={control}
                            rules={{ required: 'Weight is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span>
                                        <InputNumber placeholder="Weight" id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />
                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>
                                </div>
                            )}
                        />
                        <Controller
                            name="height"
                            control={control}
                            rules={{ required: 'Height is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span>
                                        <InputNumber placeholder="Height" id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.value)} />
                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>
                                </div>
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                // required: 'Email is required.',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            }}
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span >
                                        <InputText placeholder="Email" id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>
                                </div>
                            )}
                        />
                        <Controller
                            name="mobile"
                            control={control}
                            rules={{ required: 'Contact is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span>
                                        <InputText placeholder="Contact" id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>
                                </div>
                            )}
                        />
                    </>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field, fieldState }) => (
                            <div className=" margin-l-10">
                                <span>
                                    <InputTextarea placeholder="Address" rows={2} cols={30} autoResize id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />

                                </span>
                            </div>
                        )}
                    />
                </SplitterPanel>
                <SplitterPanel className=" margin-l-10 block-display" size={50}>
                    <>
                        <Controller
                            name="profession"
                            control={control}
                            rules={{ required: 'Profession is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span >
                                        {/* <label htmlFor={field.name}>Name </label> */}
                                        <InputText placeholder="Profession" id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />

                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>

                                </div>
                            )}
                        />
                        <Controller
                            name="username"
                            control={control}
                            rules={{ required: 'Username is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span >
                                        {/* <label htmlFor={field.name}>Name </label> */}
                                        <InputText placeholder="Username" id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />

                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>

                                </div>
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: 'Password is required.' }}
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span>
                                        <Password feedback={false}
                                            toggleMask
                                            className="p-inputtext-sm margin-b-md"
                                            placeholder="Enter Password"
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.target.value)}
                                        />


                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>
                                </div>
                            )}
                        />
                        <Controller
                            name="repassword"
                            control={control}                            
                            render={({ field, fieldState }) => (
                                <div className="margin-b-md">
                                    <span>
                                        <Password feedback={false}
                                            toggleMask
                                            className="p-inputtext-sm margin-b-md"
                                            placeholder="Re Enter Password"
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.target.value)}
                                        />


                                    </span>
                                    <div >  {getFormErrorMessage(field.name)}</div>
                                </div>
                            )}
                        />
                    </>
                </SplitterPanel>
            </Splitter>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button label="Submit" className="small-button margin-r-10" severity="success" />
                <Button label="Cancel" className="small-button" severity="secondary" onClick={() => setVisible(false)} autoFocus />
            </div>
        </form>
    )
}

export default Register