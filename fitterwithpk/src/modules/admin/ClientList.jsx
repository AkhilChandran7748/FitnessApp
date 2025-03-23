import React, { useEffect, useState } from "react";
import PrimeReactDataTable from "../../Utils/PrimeReactDataTable";
import { getClientList, approveUser } from "./adminServices";
import ConfirmModal from "../common/ConfirmModal";
import { Button } from "primereact/button";

const ClientList = () => {
    const [clientList, setClientList] = useState([])
    const [show, setShow] = useState(false)
    const [selectedClient, setSelectedClient] = useState(null)
    const getClientListData = () => {
        getClientList().then((res) => {
            if (res?.data?.data) {
                setClientList(res.data.data)
            }

        })
    }
    const onApprove = () => {
        approveUser({ "AcceptingUserID": selectedClient }).then((res) => {
            if (res?.data?.success) {
                getClientListData();
                setSelectedClient(null)
                setShow(false)
            }
        })
    }
    useEffect(() => {
        getClientListData();
    }, [])


    const columnHelper = [
        {
            header: "ID",
            field_name: "IdUser",
        },
        {
            header: "Name",
            field_name: "FirstName",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{rowData.FirstName + ' ' + rowData.LastName}</span>
                    </div>
                );
            }
        },
        {
            header: "Email ID",
            field_name: "EmailID",
        },
        {
            header: "Contact",
            field_name: "Mobile",
        },
        {
            header: "ApproveStatus",
            field_name: "",
            template: (rowData) => {
                return (
                    <div className="w-100">
                        {rowData.ApproveStatus === 'Y' ?
                            <span title="User Approved" className="pi pi-check-circle green">Approved</span>
                            :
                            <span title="Status Waiting" className="pi pi-check-circle text-warning">Pending</span>
                        }
                    </div>
                );
            }
        },
        {
            header: "Actions",
            field_name: "",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">

                        {rowData.ApproveStatus === 'N' && <span title="Approve User" onClick={() => {
                            setShow(true)
                            setSelectedClient(rowData.IdUser)
                        }} className=" margin-r-5p pi pi-exclamation-circle red shadow" ></span>}

                        <span title="Delete" onClick={() => { }} className="pi pi-trash red" ></span>

                    </div>
                );
            }
        },
    ];
    return (<>
        <ConfirmModal
            visible={show}
            onClose={() => setShow(false)}
            content={"Are you sure you want to approve this client?"}
            onConfirm={onApprove}
            header={"Confirm Approve"}
        />
        <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-12">
            <PrimeReactDataTable
                data={clientList}
                columns={columnHelper}
                onRowSelect={(clickData) => {
                    console.log("row data", clickData);
                }}
                onCellSelect={(cellData) => {
                    console.log("cell data", cellData);
                }}
            />
        </div>
    </>)
}
export default ClientList