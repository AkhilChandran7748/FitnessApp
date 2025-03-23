import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import { TabView, TabPanel } from 'primereact/tabview';
import { Toast } from 'primereact/toast';
import AdminSideBar from "./AdminSideBar";
import DailyUpdatesTable from "../common/DailyUpdatesTable";
const UserProfile = () => {
    const { id } = useParams();
    console.log(('id', id));

    const toast = useRef(null);
    const [clientData, setClientData] = useState({
        Name: 'Dummy Name',
        Email: 'dummy@email.com',
        MobileNumber: '0000000000'
    })

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
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </>)
}
export default UserProfile