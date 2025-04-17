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

    
    const onWeeklyUpdateCardClick = (rowData,index)=>{

    }


    return (
        <>
            {!adminView && <UserSideBar />}
            <div className="container fit_app_section mt-2">
                <div className="text-center">
                    {!adminView && <h4>My Weekly Updates</h4>}
                </div>
               
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
