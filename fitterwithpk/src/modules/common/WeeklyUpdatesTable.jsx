import React, { useEffect, useState } from "react";
import PrimeReactDataTable from "../../Utils/PrimeReactDataTable";
import { getWeeklyUpdate } from "../user/UserServices";
import UserSideBar from "../user/UserSideBar";
import DailyUpdatesModal from "./DailyUpdatesModal";

const WeeklyUpdatesTable = ({ id , adminView }) => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
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


    const columnHelper = [
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
                        <span className="text-info">{(rowData.Neck || 0) + ' hrs '}</span>
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
                        <span className="text-info">{(rowData.Chest || 0) + ' hrs '}</span>
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
                        <span className="text-info">{(rowData.UpperArm || 0) + ' hrs '}</span>
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
                        <span className="text-info">{(rowData.Quadriceps || 0) + ' hrs '}</span>
                    </div>
                );
            }
        },
        {
            header: "Detailed View",
            field_name: "",
            template: () => {
                return (<div className="w-100">
                    <span title="Yes" className="pi pi-eye text-success" onClick={() => setShow(true)}></span>
                </div>)
            }
        },
    ];
    return (<>
        {show && <DailyUpdatesModal data={data} visible={show} setVisible={(i) => setShow(i)} />}
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