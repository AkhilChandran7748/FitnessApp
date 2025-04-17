import React, { useEffect, useState } from "react";
import { DataView } from "primereact/dataview";
import { getWeeklyUpdate } from "../user/UserServices";
import UserSideBar from "../user/UserSideBar";
import DailyUpdatesModal from "./DailyUpdatesModal";
import EditWeeklyUpdates from "../user/EditWeeklyUpdates";
import { Image } from "primereact/image";
import { UNITS } from "../../Utils/Constants";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import UserMobileFooter from "../user/UserMobileFooter";
import { RENDER_URL } from "../../Utils/Urls";
import GalleryList from "./GalleryList";

const WeeklyUpdatesTableNew = ({ id, adminView }) => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const [editdata, setEditData] = useState({});
    const navigate = useNavigate();

    const getData = () => {
        let reqParam = {};
        if (id) reqParam = { IdUser: id };
        getWeeklyUpdate(reqParam).then((res) => {

            const updatedData = res.data.data.map((item, index) => ({
                ...item,
                WeekLabel: `Week ${index + 1}`,
            }));

            console.log(updatedData);

            setData(updatedData);
        });
    };

    useEffect(() => {
        getData();
    }, []);


    const getArrow = (difference) => {
        if (difference > 0) {
            return <span className="text-success">&#x2191;</span>;  // Up arrow in green for positive difference
        } else if (difference < 0) {
            return <span className="text-danger">&#x2193;</span>;  // Down arrow in red for negative difference
        }
        return null; // No arrow for 0 difference
    };

    const onGalleryViewClick = (rowData) => {
        navigate(RENDER_URL.VIEW_WEEKLY_UPDATES_PHOTOS, {
            state: {
                selectedData:rowData,
                show
            }
        })
    }


    const itemTemplate = (rowData, grid, index) => {
        if (!rowData) return null;

        return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                <div className="card" style={{ width: "100%" }}>
                    <div className="card-body py-3 px-2">
                        <h5 className="text-center mb-2">{rowData.WeekLabel}</h5>
                        <div className="container">

                            {/* Each row contains 3 columns now */}
                            <div className="row mb-2">
                                <div className="col-4">
                                    <p className="text-center mb-1">Weight</p>
                                    <p className="text-center mb-0">
                                        {rowData.Weight} {UNITS.WEIGHT.KILO} {getArrow(rowData.WeightDifference)} {rowData.WeightDifference} {UNITS.WEIGHT.KILO}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className="text-center mb-1">Waist</p>
                                    <p className="text-center mb-0">
                                        {rowData.Waist} {UNITS.HEIGHT.INCH} {getArrow(rowData.WaistDifference)} {rowData.WaistDifference} {UNITS.HEIGHT.INCH}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className="text-center mb-1">Hip</p>
                                    <p className="text-center mb-0">
                                        {rowData.BodyHip} {UNITS.WEIGHT.KILO} {getArrow(rowData.BodyHipDifference)} {rowData.BodyHipDifference} {UNITS.WEIGHT.KILO}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className="text-center mb-1">Chest</p>
                                    <p className="text-center mb-0">
                                        {rowData.Chest} {UNITS.HEIGHT.INCH} {getArrow(rowData.ChestDifference)} {rowData.ChestDifference} {UNITS.HEIGHT.INCH}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className="text-center mb-1">Neck</p>
                                    <p className="text-center mb-0">
                                        {rowData.Neck} {UNITS.HEIGHT.INCH} {getArrow(rowData.NeckDifference)} {rowData.NeckDifference} {UNITS.HEIGHT.INCH}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className="text-center mb-1">Upper Arm</p>
                                    <p className="text-center mb-0">
                                        {rowData.UpperArm} {UNITS.HEIGHT.INCH} {getArrow(rowData.UpperArmDifference)} {rowData.UpperArmDifference} {UNITS.HEIGHT.INCH}
                                    </p>
                                </div>
                            </div>

                            <div className="row mb-1">
                                <div className="col-4">
                                    <p className="text-center mb-1">Quadriceps</p>
                                    <p className="text-center mb-0">
                                        {rowData.Quadriceps} {UNITS.HEIGHT.INCH} {getArrow(rowData.QuadricepsDifference)} {rowData.QuadricepsDifference} {UNITS.HEIGHT.INCH}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className="text-center mb-1">Body Fat</p>
                                    <p className="text-center mb-0">
                                        {rowData.BodyFat} % {getArrow(rowData.BodyFatDifference)} {rowData.BodyFatDifference} %
                                    </p>
                                </div>
                                <div className="col-4">
                                    {/* Optional third column or leave empty */}
                                </div>
                            </div>

                            <div className="d-flex justify-content-end gap-2 mt-2">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    title="Edit"
                                    onClick={() => {
                                        setEditData(rowData);
                                        setShowEdit(true);
                                    }}
                                >
                                    <i className="pi pi-pen-to-square me-1"></i>Edit
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    title="Details View"
                                    onClick={() => {
                                        setSelectedRow(rowData);
                                        setShow(true);
                                        setTimeout(() => {
                                            onGalleryViewClick(rowData);
                                        }, 300);
                                    }}
                                >
                                    <i className="pi pi-eye me-1"></i>Images
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    };






    return (
        <>
            {showEdit && (
                <EditWeeklyUpdates
                    data={editdata}
                    reload={() => {
                        setShowEdit(false);
                        setEditData({});
                        getData();
                    }}
                    visible={showEdit}
                    setVisible={setShowEdit}
                />
            )}

            {!adminView && <UserSideBar />}
            <div className="container fit_app_section mt-2">
                <div className="text">
                    {!adminView && <p className="strong ">Your body metrics</p>}
                </div>
                <div>

                </div>
                <DataView
                    value={data}
                    itemTemplate={(rowData, layout, index) => itemTemplate(rowData, layout, index)}
                    layout="grid"
                    paginator
                    rows={9}
                />
                
                {!adminView ?
                    //for client to add his/her daily updates 
                    <div className="fixed floating_button">
                        <Button icon="pi pi-plus" severity="secondary" style={{ borderRadius: '50%' }} onClick={() => {
                            navigate(RENDER_URL.WEEKLY_UPDATES)
                        }} />
                    </div> :
                    //for admin side to add diet plans and workout plans for the user
                    <div className="fixed floating_button">
                        <Button icon="pi pi-plus" severity="danger" style={{ borderRadius: '50%' }} onClick={() => {
                            navigate(RENDER_URL.ADMIN_ADD_DIET, { state: { IdUser: id, adminView: adminView } })
                        }} />
                    </div>
                }

                {!adminView && <UserMobileFooter />}

            </div>
        </>
    );
};

export default WeeklyUpdatesTableNew;
