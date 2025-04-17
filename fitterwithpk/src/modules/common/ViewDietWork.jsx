import React, { useEffect, useState } from "react";
import { DataView } from "primereact/dataview";
import { getDietPlan, getWeeklyUpdate } from "../user/UserServices";
import UserSideBar from "../user/UserSideBar";


import { useNavigate } from "react-router-dom";
import UserMobileFooter from "../user/UserMobileFooter";
import { RENDER_URL } from "../../Utils/Urls";
import AdminSideBar from "../admin/AdminSideBar";
import MobileFooter from "../admin/AdminMobileFooter";
import { Button } from "primereact/button";


const ViewDietWork = ({ id, adminView }) => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const navigate = useNavigate();

    const getData = () => {
        let reqParam = {};
        if (id) reqParam = { IdUser: id };
        getDietPlan(reqParam).then((res) => {

            if (res.status === 200) {
                let modified_data = res.data.data.map((element) => {
                    element.FileName = JSON.parse(element.FileName);
                    return element;
                });
                console.log(modified_data);
                setData(modified_data);
            }
        });
    };

    useEffect(() => {
        getData();
    }, []);


    const onPdfFileClick = (path) => {
        //open the pdf file in new jsx 
        navigate('/view-pdf', { state: { path: path, adminView: adminView } });
    }


    const itemTemplate = (rowData, grid, index) => {
        if (!rowData) return null;

        return (

            <div className="col-sm-12 col-md-12 col-lg-12 mb-4 d-flex justify-content-center">
                <div className="card" style={{ width: "100%" }}>
                    <div className="card-body py-3 px-2">
                        <p className="mb-2">{rowData.DietName}</p>
                        <div className="container">
                            {
                                rowData.FileName.diet_plan !== "" ?
                                    <div className="col-12" onClick={() => { onPdfFileClick(`https://api.fitwithpk.com/uploads/dietplans/${rowData.FileName.diet_plan}`) }}>
                                        <i className="pi pi-file-pdf p-1" >
                                            {rowData.FileName.diet_plan}
                                        </i>
                                        <div style={{ float: 'right' }}>
                                            <i className="pi pi-eye p-1" />view
                                        </div>
                                    </div> :
                                    ""
                            }

                            {
                                rowData.FileName.workout_plan !== "" ?
                                    <div className="col-12" onClick={() => { onPdfFileClick(`https://api.fitwithpk.com/uploads/workplans/${rowData.FileName.workout_plan}`) }}>
                                        <i className="pi pi-file-pdf p-1" >
                                            {rowData.FileName.workout_plan}
                                        </i>
                                        <div style={{ float: 'right' }}>
                                            <i className="pi pi-eye p-1" />view
                                        </div>
                                    </div>
                                    :
                                    ""
                            }

                        </div>
                    </div>
                </div>
            </div>

        );
    };






    return (
        <>
            {adminView ? '' : <UserSideBar />}
            <div className="container fit_app_section mt-2">
                <div className="text">
                    {adminView ? <p className="strong ">Preivous Diet & Workout Plans</p>
                        :
                        <p className="strong ">Your Diet & Workout </p>}
                </div>
                <div className="row m-2 p-1">
                    <DataView
                        value={data}
                        itemTemplate={(rowData, layout, index) => itemTemplate(rowData, layout, index)}
                        layout="grid"
                        paginator
                        rows={9}
                        style={{ width: '100%' }}
                    />
                </div>

                {!adminView ?
                    '' :
                    //for admin side to add diet plans and workout plans for the user
                    <div className="fixed floating_button">
                        <Button icon="pi pi-plus" severity="danger" style={{ borderRadius: '50%' }} onClick={() => {
                            navigate(RENDER_URL.ADMIN_ADD_DIET, { state: { IdUser: id, adminView: adminView } })
                        }} />
                    </div>
                }

                {adminView ? <MobileFooter /> : <UserMobileFooter />}

            </div>
        </>
    );
};

export default ViewDietWork;
