import React, { useEffect, useState } from "react";
import { DataView } from "primereact/dataview";
import { getWeeklyUpdate } from "../user/UserServices";
import UserSideBar from "../user/UserSideBar";
import DailyUpdatesModal from "./DailyUpdatesModal";
import EditWeeklyUpdates from "../user/EditWeeklyUpdates";
import { Image } from "primereact/image";
import { WEIGHT_UNIT } from "../../Utils/Constants";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import UserMobileFooter from "../user/UserMobileFooter";
import { RENDER_URL } from "../../Utils/Urls";

const WeeklyUpdatesTable = ({ id, adminView }) => {
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

    const itemTemplate = (rowData, grid, index) => {
        if (!rowData) return null;

        { console.log(index) }

        return (

            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                <div className="card" style={{ width: "90%" }}>
                    <div className="card-body">

                        <div className="row mb-2">
                            <div className="col-12 text-center">
                                {rowData.DataRange ? `${rowData.WeekLabel}` : `${rowData.WeekLabel}`}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 text-center">
                                <span className="text-center">Weight</span><br />
                                <img src={`/icons/weight_measure.png`} alt={"weight"} className="w-6 shadow-2" />
                                <span>
                                    <p className="mt-0 mb-3">{rowData.Weight} {WEIGHT_UNIT.KILO} {getArrow(rowData.WeightDifference)} {rowData.WeightDifference} </p>
                                </span>
                            </div>


                            <div className="col-6 text-center">
                                <span className="text-center">BodyFat</span><br />
                                <img height={50} width={50} src={`/icons/chest_measure.png`} alt={"bodyFat"} className="w-6 shadow-2" />
                                <span>
                                    <p className="mt-0 mb-3">{rowData.BodyFat} {WEIGHT_UNIT.KILO} {rowData.BodyFatDifference} {getArrow(rowData.BodyFatDifference)}</p>
                                </span>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-6 text-center">
                                <span className="text-center">Waist</span><br />
                                <img height={50} width={50} src={`/icons/waist_measure.png`} alt={"waist"} className="w-6 shadow-2" />
                                <span>
                                    <p className="mt-0 mb-3">{rowData.Waist} in. {rowData.WaistDifference} in. {getArrow(rowData.WaistDifference)}</p>
                                </span>
                            </div>


                            <div className="col-6 text-center">
                                <span className="text-center">BodyHip</span><br />
                                <img height={50} width={50} src={`/icons/hip_measure.png`} alt={"bodyHip"} className="w-6 shadow-2" />
                                <span>
                                    <p className="mt-0 mb-3">{rowData.BodyHip} in. {rowData.BodyHipDifference} in. {getArrow(rowData.BodyHipDifference)}</p>
                                </span>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-6 text-center">
                                <span className="text-center">Neck</span><br />
                                <img height={50} width={50} src={`/icons/neck_measure.png`} alt={"neck"} className="w-6 shadow-2" />
                                <span>
                                    <p className="mt-0 mb-3">{rowData.Neck} in. {rowData.NeckDifference} in. {getArrow(rowData.NeckDifference)}</p>
                                </span>
                            </div>


                            <div className="col-6 text-center">
                                <span className="text-center">Chest</span><br />
                                <img height={50} width={50} src={`/icons/chest_measure.png`} alt={"chest"} className="w-6 shadow-2" />
                                <span>
                                    <p className="mt-0 mb-3">{rowData.Chest} in. {rowData.ChestDifference} in. {getArrow(rowData.ChestDifference)}</p>
                                </span>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-6 text-center">
                                <span className="text-center">UpperArm</span><br />
                                <img height={50} width={50} src={`/icons/upper_arm_measure.png`} alt={"upperArm"} className="w-6 shadow-2" />
                                <span>
                                    <p className="mt-0 mb-3">{rowData.UpperArm} in. {rowData.UpperArmDifference} in. {getArrow(rowData.UpperArmDifference)}</p>
                                </span>
                            </div>


                            <div className="col-6 text-center">
                                <span className="text-center">Quadriceps</span><br />
                                <img height={50} width={50} src={`/icons/thigh_measure.png`} alt={"quadriceps"} className="w-6 shadow-2" />
                                <span>
                                    <p className="mt-0 mb-3">{rowData.Quadriceps} in. {rowData.QuadricepsDifference} in. {getArrow(rowData.QuadricepsDifference)}</p>
                                </span>
                            </div>
                        </div>


                        <div className="d-flex justify-content-end gap-2 mt-3">
                            {/* Conditionally show "View Details" or "Edit" button based on the state */}
                            {!adminView ? (
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    title="Edit"
                                    onClick={() => {
                                        setEditData(rowData);
                                        setShowEdit(true);
                                    }}
                                >
                                    <i className="pi pi-pen-to-square me-1 mr-1"></i>Edit
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    title="Details View"
                                    onClick={() => {
                                        setSelectedRow(rowData);
                                        setShow(true);
                                    }}
                                >
                                    <i className="pi pi-eye me-1 mr-1"></i>Details
                                </button>
                            )}
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
            {show && selectedRow && (
                <DailyUpdatesModal
                    key={selectedRow.DataRange}
                    selectedData={selectedRow}
                    data={data}
                    visible={show}
                    setVisible={setShow}
                />
            )}
            {!adminView && <UserSideBar />}
            <div className="container fit_app_section mt-2">
                <div className="text-center">
                    {!adminView && <h4>My Weekly Updates</h4>}
                </div>
                <DataView
                    value={data}
                    itemTemplate={(rowData, layout, index) => itemTemplate(rowData, layout, index)}
                    layout="grid"
                    paginator
                    rows={9}
                />

                <div className="fixed floating_button">
                    <Button icon="pi pi-plus" severity="secondary" style={{ borderRadius: '50%' }} onClick={() => {
                        navigate(RENDER_URL.WEEKLY_UPDATES)
                    }} />
                </div>

                {!adminView && <UserMobileFooter />}

            </div>
        </>
    );
};

export default WeeklyUpdatesTable;
