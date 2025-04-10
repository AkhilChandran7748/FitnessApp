import React, { useEffect, useState } from "react";
import { DataView } from "primereact/dataview";
import { getDailyUpdate } from "../user/UserServices";
import UserSideBar from "../user/UserSideBar";
import EditDailyUpdates from "../user/EditDailyUpdate";
import { FaPen, FaDirections, FaMoon, FaTint, FaWeightHanging, FaCheckCircle, FaTimesCircle, FaStar } from "react-icons/fa";
import UserMobileFooter from "../user/UserMobileFooter";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";

const DailyUpdatesTable = ({ id, adminView }) => {
    const [data, setData] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [editdata, setEditData] = useState({});

    const navigate = useNavigate();

    const getData = () => {
        let reqParam = {};
        if (id) reqParam = { IdUser: id };
        getDailyUpdate(reqParam).then((res) => {
            setData(res.data.data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const itemTemplate = (rowData) => {
        return (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="card-title text-primary mb-0">{rowData.Day}</h5>
                            {!adminView && (
                                <FaPen
                                    className="text-dark"
                                    style={{ cursor: "pointer" }}
                                    title="Edit"
                                    onClick={() => {
                                        setEditData(rowData);
                                        setShowEdit(true);
                                    }}
                                />
                            )}
                        </div>

                        <p className="card-text">
                            <FaDirections className="text-dark me-2" />
                            <strong>Steps:</strong> {rowData.Steps}
                        </p>
                        <p className="card-text">
                            <FaMoon className="text-dark me-2" />
                            <strong>Sleep:</strong> {rowData.Sleep} hrs
                        </p>
                        <p className="card-text">
                            <FaTint className="text-dark me-2" />
                            <strong>Water:</strong> {rowData.Water} ltrs
                        </p>
                        <p className="card-text">
                            <FaWeightHanging className="text-dark me-2" />
                            <strong>Weight:</strong> {rowData.Weight} kg
                        </p>

                        <p className="card-text">
                            <FaStar className="text-dark me-2" />
                            <strong>Workout Follow:</strong>{" "}
                            {rowData.WorkOut ? (
                                <span className="text-success">
                                    <FaCheckCircle /> Done
                                </span>
                            ) : (
                                <span className="text-danger">
                                    <FaTimesCircle /> No
                                </span>
                            )}
                        </p>
                        <p className="card-text">
                            <FaCheckCircle className="text-dark me-2" />
                            <strong>Diet Follow:</strong>{" "}
                            {rowData.Diet_Follow ? (
                                <span className="text-success">
                                    <FaCheckCircle /> Done
                                </span>
                            ) : (
                                <span className="text-danger">
                                    <FaTimesCircle /> No
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {showEdit && (
                <EditDailyUpdates
                    data={editdata}
                    reload={() => {
                        setEditData({});
                        setShowEdit(false);
                        getData();
                    }}
                    setVisible={() => setShowEdit(false)}
                    visible={showEdit}
                />
            )}
            {!adminView && <UserSideBar />}
            <div className="logo mb-3 text-center">
                {!adminView && <h1>My Daily Updates</h1>}
            </div>
            <div className="container fit_app_section">
                <DataView
                    value={data}
                    itemTemplate={itemTemplate}
                    layout="grid"
                    paginator
                    rows={9}
                />

                <div className="fixed floating_button">
                    <Button icon="pi pi-plus" severity="secondary" style={{ borderRadius: '50%' }} onClick={() => {
                        navigate(RENDER_URL.DAILY_UPDATES)
                    }} />
                </div>

                {!adminView && <UserMobileFooter />}

            </div>
        </>
    );
};

export default DailyUpdatesTable;
