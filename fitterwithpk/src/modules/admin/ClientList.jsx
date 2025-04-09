import React, { useEffect, useState } from "react";
import { DataView } from "primereact/dataview";
import { getClientList, approveUser } from "./adminServices";
import ConfirmModal from "../common/ConfirmModal";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";

const ClientList = () => {
    const [clientList, setClientList] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const navigate = useNavigate();

    const getClientListData = () => {
        getClientList().then((res) => {
            if (res?.data?.data) {
                setClientList(res.data.data);
            }
        });
    };

    const onApprove = () => {
        approveUser({ "AcceptingUserID": selectedClient }).then((res) => {
            if (res?.data?.success) {
                getClientListData();
                setSelectedClient(null);
                setShow(false);
            }
        });
    };

    useEffect(() => {
        getClientListData();
    }, []);

    // Define an item template for the grid card layout.
    const itemTemplate = (client) => {
        if (!client) return null;
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card shadow mr-2">
                    <div className="card-body">
                        <Link to={`${RENDER_URL.VIEW_CLIENT}/${client.IdUser}`} className="text-decoration-none">
                            <h5 className="card-title text-dark">
                                {client.FirstName + " " + client.LastName}
                            </h5>
                        </Link>
                        <p className="card-text mb-1"><strong>Email:</strong> {client.EmailID}</p>
                        <p className="card-text mb-1"><strong>Contact:</strong> {client.Mobile}</p>
                        <p className="card-text text-right">
                            {client.ApproveStatus === 'Y' ? (
                                <span title="User Approved" className="text-success" style={{ fontWeight: 'bold' }}>
                                    <i className="pi pi-check-circle me-1"></i>Approved
                                </span>
                            ) : (
                                <span title="Status Waiting" className="text-warning" style={{ fontWeight: 'bold' }}>
                                    <i className="pi pi-clock me-1"></i>Pending
                                </span>
                            )}
                        </p>
                        <div className="d-flex justify-content-end gap-2 mt-3">
                            {client.ApproveStatus === 'N' ? (
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    title="Approve User"
                                    onClick={() => {
                                        setShow(true);
                                        setSelectedClient(client.IdUser);
                                    }}
                                >
                                    <i className="pi pi-check-circle me-1 mr-1"></i>Approve
                                </button>
                            ) :
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    title="Details View"
                                    onClick={() => {
                                        navigate(`${RENDER_URL.VIEW_CLIENT}/${client.IdUser}`);
                                    }}
                                >
                                    <i className="pi pi-eye me-1 mr-1"></i>Details
                                </button>
                            }
                            <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                title="Delete"
                                onClick={() => { /* add delete logic here */ }}
                            >
                                <i className="pi pi-trash me-1 mr-1"></i>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };



    return (
        <>
            <ConfirmModal
                visible={show}
                onClose={() => setShow(false)}
                content={"Are you sure you want to approve this client?"}
                onConfirm={onApprove}
                header={"Confirm Approve"}
            />
            <div className="p-fluid col-lg-12 col-md-12 col-sm-12">
                <DataView
                    value={clientList}
                    itemTemplate={itemTemplate}
                    layout="grid"
                    paginator
                    rows={9}
                />
            </div>
        </>
    );
};

export default ClientList;
