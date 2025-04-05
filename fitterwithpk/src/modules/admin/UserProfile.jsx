import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import { TabView, TabPanel } from 'primereact/tabview';
import { Toast } from 'primereact/toast';
import AdminSideBar from "./AdminSideBar";
import DailyUpdatesTable from "../common/DailyUpdatesTable";
import WeeklyUpdatesTable from "../common/WeeklyUpdatesTable";
import { getClientList } from "./adminServices";
const UserProfile = () => {
    const { id } = useParams();

    const toast = useRef(null);
    const [clientData, setClientData] = useState({
        Name: 'Dummy Name',
        Email: 'dummy@email.com',
        MobileNumber: '0000000000'
    })

    const getClientListData = () => {
        getClientList({ IdUser: id }).then((res) => {
            if (res?.data?.data) {
                let cdata = res?.data?.data.length ? res?.data?.data[0] : {}
                setClientData({
                    Name: cdata.FirstName + ' ' + cdata.LastName,
                    Email: cdata.EmailID
                })
            }

        })
    }
    useEffect(() => {
        if (id) {
            getClientListData();
        }
    }, [id])
    return (<>
        <AdminSideBar />
        <Toast ref={toast} />
        <div className="content student">
            <div className="card">
                <PersonalInfo client={clientData} />
                <TabView className="content">
                    <TabPanel header="Daily Updates">
                        <DailyUpdatesTable id={id} adminView={true} />
                    </TabPanel>
                    <TabPanel header="Weekly Updates">
                        <WeeklyUpdatesTable id={id} adminView={true} />
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </>)
}
export default UserProfile