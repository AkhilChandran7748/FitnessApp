import React, { useEffect, useState } from "react";
import PrimeReactDataTable from "../../Utils/PrimeReactDataTable";
import { getWeeklyUpdate } from "../user/UserServices";
import UserSideBar from "../user/UserSideBar";
import DailyUpdatesModal from "./DailyUpdatesModal";
import EditWeeklyUpdates from "../user/EditWeeklyUpdates";

const WeeklyUpdatesTable = ({ id, adminView }) => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    const [showEdit, setShowEdit] = useState(false)
    const [editdata, setEditData] = useState({})

    const getData = () => {
        let reqParam = {}
        if (id) {
            reqParam = { "IdUser": id }
        }
        getWeeklyUpdate(reqParam).then((res) => {
            // console.log(res, 'wwekly res')
            setData(res.data.data)

        })
    }
    useEffect(() => {
        getData();
    }, [])


    let columnHelper = [
        {
            header: "Date Range",
            field_name: "DataRange",
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
            header: "Waist",
            field_name: "Waist",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{(rowData.Waist || 0) + ' in '}</span>
                    </div>
                );
            }
        },
        {
            header: "BodyFat",
            field_name: "BodyFat",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{(rowData.BodyFat || 0) + ' in '}</span>
                    </div>
                );
            }
        },
        {
            header: "BodyHip",
            field_name: "BodyHip",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{(rowData.BodyHip || 0) + ' in '}</span>
                    </div>
                );
            }
        },
        {
            header: "Neck",
            field_name: "Neck",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{(rowData.Neck || 0) + '  in. '}</span>
                    </div>
                );
            }
        },
        {
            header: "Chest",
            field_name: "Chest",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{(rowData.Chest || 0) + '  in. '}</span>
                    </div>
                );
            }
        },
        {
            header: "UpperArm",
            field_name: "UpperArm",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{(rowData.UpperArm || 0) + '  in. '}</span>
                    </div>
                );
            }
        },
        {
            header: "Quadriceps",
            field_name: "Quadriceps",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{(rowData.Quadriceps || 0) + '  in. '}</span>
                    </div>
                );
            }
        },
        {
            header: "Actions",
            field_name: "",
            template: (rowData) => {


                return (<>
                    <div className="w-100">
                        <span title="Detailed View" className="pi pi-eye text-success margin-r-5p" onClick={() => {
                            setSelectedRow(rowData)
                            setShow(true)
                        }}></span>
                        {!adminView && <span title="Edit" className="pi pi-pen-to-square " onClick={() => {
                            setEditData(rowData)
                            setShowEdit(true)
                        }}></span>}
                    </div> </>)

            }
        },
    ];
    return (<>
        {showEdit && <EditWeeklyUpdates
            data={editdata}
            reload={() => {
                setShowEdit(false);
                setEditData({})
                getData();
            }}
            visible={showEdit} setVisible={setShowEdit} />}
        {show && selectedRow && <DailyUpdatesModal key={selectedRow.DataRange} selectedData={selectedRow} data={data} visible={show} setVisible={(i) => setShow(i)} />}

        {!adminView && <UserSideBar />}
        <div className="logo mb-3">
            <div className="col-md-12 text-center">
                {!adminView && <h1>My Weekly Updates</h1>}
            </div>
        </div>
        <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-12">
            <PrimeReactDataTable
                data={data}
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
export default WeeklyUpdatesTable