import React, { useEffect, useState } from "react";
import PrimeReactDataTable from "../../Utils/PrimeReactDataTable";
import { getDailyUpdate } from "../user/UserServices";
import UserSideBar from "../user/UserSideBar";
import EditDailyUpdates from "../user/EditDailyUpdate";

const DailyUpdatesTable = ({ id, adminView }) => {
    const [data, setData] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const [editdata, setEditData] = useState({})
    const getData = () => {
        let reqParam = {}
        if (id) {
            reqParam = { "IdUser": id }
        }
        getDailyUpdate(reqParam).then((res) => {
            setData(res.data.data)

        })
    }
    useEffect(() => {
        getData();
    }, [])


    let columnHelper = [
        {
            header: "Date",
            field_name: "Day",
        },
        {
            header: "Steps",
            field_name: "Steps",
        },
        {
            header: "Sleep",
            field_name: "Sleep",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{rowData.Sleep + ' hrs '}</span>
                    </div>
                );
            }
        },
        {
            header: "Water",
            field_name: "Water",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{rowData.Water + ' ltrs '}</span>
                    </div>
                );
            }
        },
        {
            header: "Weight",
            field_name: "Weight",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{rowData.Weight + ' kg '}</span>
                    </div>
                );
            }
        },
        {
            header: "WorkOut Follow",
            field_name: "WorkOut",
            template: (rowData) => {
                return (<div className="w-100">
                    {rowData.WorkOut ?
                        <span title="Yes" className="pi pi-check-circle text-success">Done</span>
                        :
                        <span title="No" className="pi pi-check-circle text-danger">No</span>
                    }
                </div>)
            }
        },
        {
            header: "Diet Follow",
            field_name: "Diet_Follow",
            template: (rowData) => {
                return (<div className="w-100">
                    {rowData.Diet_Follow ?
                        <span title="Yes" className="pi pi-check-circle text-success">Done</span>
                        :
                        <span title="No" className="pi pi-check-circle text-danger">No</span>
                    }
                </div>)
            }
        },
    ];
    if (!adminView) {
        columnHelper.push({
            header: "Edit",
            field_name: "",
            template: (rowData) => {
                return (<div className="w-100">
                    <span title="Edit" className="pi pi-pen-to-square " onClick={() => {
                        setEditData(rowData)
                        setShowEdit(true)
                    }}></span>
                </div>)
            }
        })
    }
    return (<>
        {showEdit && <EditDailyUpdates
            data={editdata}
            reload={() => {
                setEditData({})
                setShowEdit(false)
                getData();
            }}
            setVisible={() => setShowEdit(false)}
            visible={showEdit} />}
        {!adminView && <UserSideBar />}
        <div className="logo mb-3">
            <div className="col-md-12 text-center">
                {!adminView && <h1>My Daily Updates</h1>}
            </div>
        </div>
        <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-12">
            <PrimeReactDataTable
                data={data}
                columns={columnHelper}
            // onRowSelect={(clickData) => {
            //     console.log("row data", clickData);
            // }}
            // onCellSelect={(cellData) => {
            //     console.log("cell data", cellData);
            // }}
            />
        </div>
    </>)
}
export default DailyUpdatesTable